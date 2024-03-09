// import Listing from '../models/listing.model.js';
import Listing from '../models/listing.module.js';
import { errorHandler } from '../utils/error.js';


export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(404, 'Listing not found!'));
  }

  // if (req.user.id !== listing.userRef) {
  //   return next(errorHandler(401, 'You can only delete your own listings!'));
  // }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json('Listing has been deleted!');
  } catch (error) {
    next(error);
  }
};

export const updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(404, 'Listing not found!'));
  }
  // if (req.user.id !== listing.userRef) {
  //   return next(errorHandler(401, 'You can only update your own listings!'));
  // }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};

export const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, 'Listing not found!'));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

export const getListingsByDatabase = async (req, res) => {
  try {
    const database = req.params.database;
    const limit = parseInt(req.query.limit) || 50;
    let query = Listing.find({ database: database });

    // Sorting
    const sortField = req.query.sort || 'name';
    const sortOrder = req.query.order === 'desc' ? -1 : 1;
    query = query.sort({ [sortField]: sortOrder });

    // Searching
    const searchTerm = req.query.searchTerm;
    if (searchTerm) {
      query = query.or([
        { name: { $regex: searchTerm, $options: 'i' } },
        { email: { $regex: searchTerm, $options: 'i' } },
        { phone: { $regex: searchTerm, $options: 'i' } },
      ]);
    }

    const listings = await query.limit(limit);
    res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};
