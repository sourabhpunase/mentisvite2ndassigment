// src/ListingTable.js
import React, { useEffect, useState } from 'react';
import styles from './dashboar.module.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
function ListingTable({ listings,setUserListings}) {
  const { currentUser, loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();



  const handleListingDelete = async (listingId) => {
    try {
      const res = await fetch(`/api/listings/delete/${listingId}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }

      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
    
      <table className={styles.container}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {listings.map(listing => (
            <tr key={listing._id}>
              <td>{listing.name}</td>
              <td>{listing.email}</td>
              <td>{listing.phone}</td>
             <td>
              <Link to={`/update-listing/${listing._id}`}>
             Edit</Link> </td>
             
            <td onClick={()=>handleListingDelete(listing._id)}>
          delete
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListingTable;
