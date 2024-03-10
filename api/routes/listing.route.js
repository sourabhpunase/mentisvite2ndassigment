import express from 'express';
import { createListing, deleteListing, updateListing, getListing,  getListingsByDatabase } from '../controller/listing.controller.js';
import { verifyToken } from '../utils/verifiedUser.js';


const router = express.Router();

router.post('/create', verifyToken, createListing);

router.delete('/delete/:id', verifyToken, deleteListing);

router.post('/update/:id', verifyToken, updateListing);

router.get('/get/:id', getListing);


router.get('/:database/get', getListingsByDatabase);
export default router;
//listing router for accessing and performing CRUD operations