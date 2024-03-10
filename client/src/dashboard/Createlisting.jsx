import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/loader/Loader';
import { toast } from 'react-toastify';

export default function CreateListing() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    database: '', // Add database field to form state
  });
  //we will navigate on basis of database number
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');

      const res = await fetch('/api/listings/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          // Assuming currentUser contains the email address
          username: currentUser.email,
        }),
      });

      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
        toast.error('please fill all the fields');
      } else {
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const generateRandomData = () => {
    const data = [];
    const names = ['Aarav', 'Aarushi', 'Advait', 'Akshara', 'Ananya', 'Arjun', 'Avni', 'Ayush', 'Dia', 'Ishaan',
    'Kavya', 'Krish', 'Mira', 'Mohit', 'Neha', 'Rahul', 'Riya', 'Rohan', 'Roshni', 'Ruhi',
    'Saanvi', 'Shaurya', 'Shreya', 'Tanvi', 'Uday', 'Ved', 'Vidhi', 'Yash', 'Zara',
    'Aditi', 'Aryan', 'Ayesha', 'Dev', 'Esha', 'Kabir', 'Kriti', 'Manan', 'Nisha', 'Pranav']
    const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];

    for (let i = 0; i < 50; i++) {
      const randomIndex = Math.floor(Math.random() * names.length);
      const name = names[randomIndex];
      const randomNumber = Math.floor(Math.random() * 1000000000); // Random 10-digit number
      const email = `${name.toLowerCase()}${randomNumber}@${domains[Math.floor(Math.random() * domains.length)]}`;
      const phone = `+1 ${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 10000)}`;

      data.push({ name, email, phone });
    }

    return data;
  };

  const addRandomEntries = () => {
    const randomData = generateRandomData();
    setFormData({
      name: randomData[0].name,
      email: randomData[0].email,
      phone: randomData[0].phone,
      database: '', 
    });
  };

  const handleAddRandomEntries = () => {
    addRandomEntries();
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <main className='p-3 max-w-4xl mx-auto mt-16'>
      <h1 className='text-3xl font-semibold text-center my-7'>Create a Listing</h1>

      <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4'>
        <div className='flex flex-col gap-4 flex-1'>
          <input
            type='text'
            placeholder='Name'
            className='border p-3 rounded-lg'
            id='name'
            maxLength='62'
            minLength='4'
            required
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className='flex flex-col gap-4 flex-1'>
          <input
            type='email'
            placeholder='Email'
            className='border p-3 rounded-lg'
            id='email'
            maxLength='62'
            minLength='4'
            required
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type='text'
            placeholder='Phone Number'
            className='border p-3 rounded-lg'
            id='phone'
            required
            onChange={handleChange}
            value={formData.phone}
          />
     
          <select
            className='border p-3 rounded-lg'
            id='database'
            required
            onChange={handleChange}
            value={formData.database}
          >
            <option value=''>Select Database</option>
            <option value='database1'>Database 1</option>
            <option value='database2'>Database 2</option>
            <option value='database3'>Database 3</option>
          </select>
        </div>
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-lg'>
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>
      <button onClick={handleAddRandomEntries} className='bg-green-500 text-white px-4 py-2 rounded-lg mt-4'>
        Add Random Entries
      </button>
      {error && <p className='text-red-500'>{error}</p>}
    </main>
  );
}
