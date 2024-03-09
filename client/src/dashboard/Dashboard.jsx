import React, { useState, useEffect } from 'react';
import ListingTable from './ListingTable';
import CreateListing from './Createlisting';
import axios from 'axios';

function Dashboard() {
  const [activeDatabase, setActiveDatabase] = useState('database1');
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortField, setSortField] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [userListings, setUserListings] = useState([]);

  useEffect(() => {
    fetchData();
  }, [activeDatabase, sortField, sortOrder, searchTerm,userListings]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/listings/${activeDatabase}/get`, {
        params: {
          limit: 50,
          sort: sortField,
          order: sortOrder,
          searchTerm: searchTerm,
        },
      });
      setListings(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleTabChange = (database) => {
    setActiveDatabase(database);
  };

  const handleSort = (field) => {
    if (field === sortField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="tabs">
        <button
          className={activeDatabase === 'database1' ? 'active' : ''}
          onClick={() => handleTabChange('database1')}
        >
          Database 1
        </button>
        <button
          className={activeDatabase === 'database2' ? 'active' : ''}
          onClick={() => handleTabChange('database2')}
        >
          Database 2
        </button>
        <button
          className={activeDatabase === 'database3' ? 'active' : ''}
          onClick={() => handleTabChange('database3')}
        >
          Database 3
        </button>
      </div>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
        <button onClick={() => handleSort('name')}>
        Sort by Name {sortField === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
      </button>
      <button onClick={() => handleSort('email')}>
        Sort by Email {sortField === 'email' && (sortOrder === 'asc' ? '▲' : '▼')}
      </button>
      <button onClick={() => handleSort('phone')}>
        Sort by Phone {sortField === 'phone' && (sortOrder === 'asc' ? '▲' : '▼')}
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ListingTable listings={listings} handleSort={handleSort}
        
     setUserListings={setUserListings}
     />
      )}

     
    </div>
  );
}

export default Dashboard;
