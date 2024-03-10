import React, { useState, useEffect, useRef } from 'react';
import ListingTable from './ListingTable';
import styles from './dashboard.module.css'; // Import your CSS module
import { NavLink } from 'react-router-dom';
import Loader from '../components/loader/Loader';

function Dashboard() {
  const [activeDatabase, setActiveDatabase] = useState('database1');
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortField, setSortField] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [userListings, setUserListings] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, [activeDatabase, sortField, sortOrder, searchTerm, userListings]);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/listings/${activeDatabase}/get?limit=50&sort=${sortField}&order=${sortOrder}&searchTerm=${searchTerm}`);
      const data = await response.json();
      setListings(data);
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

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        <button
          className={`${activeDatabase === 'database1' ? styles.active : ''} ${styles.dash1}`}
          onClick={() => handleTabChange('database1')}
        >
          Database 1
        </button>
        <button
          className={`${activeDatabase === 'database2' ? styles.active : ''} ${styles.dash2}`}
          onClick={() => handleTabChange('database2')}
        >
          Database 2
        </button>
        <button
          className={`${activeDatabase === 'database3' ? styles.active : ''} ${styles.dash3}`}
          onClick={() => handleTabChange('database3')}
        >
          Database 3
        </button>
      </div>

      <div className={styles.right}>
        <div className={styles.search}>
          <label>
            <input
              type="text"
              required
              placeholder="Search users..."
              value={searchTerm}
              ref={searchRef}
              onChange={handleSearch}
              className={styles.input}
            />
          </label>
        </div>

        <div className={styles.filter}>
          <button className={styles.create}>
            <NavLink to={'/create'}>
              <span className='font-extrabold text-3xl mr-2'>+</span>Add a new Listing 
            </NavLink>
          </button>
      
          <button onClick={() => handleSort('name')} className={styles.button}>
            Sort by Name{' '}
            {sortField === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
          </button>
          <button onClick={() => handleSort('email')} className={styles.button}>
            Sort by Email{' '}
            {sortField === 'email' && (sortOrder === 'asc' ? '▲' : '▼')}
          </button>
          <button onClick={() => handleSort('phone')} className={styles.button}>
            Sort by Phone{' '}
            {sortField === 'phone' && (sortOrder === 'asc' ? '▲' : '▼')}
          </button>
        </div>

        <div className={styles.table}>
          <ListingTable listings={listings} handleSort={handleSort} setUserListings={setUserListings} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
