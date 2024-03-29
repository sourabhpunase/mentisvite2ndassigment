import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate,useParams} from 'react-router-dom';

export default function Updatelisting() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    database: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const params= useParams();

  useEffect(()=>{
    const fetchListing= async ()=>{
const listingId=params.listingId;
const res= await fetch(`/api/listings/get/${listingId}`);
  const data=await res.json();
  if(data.success===false){
    console.log(data.message);
    return ;
  }
  setFormData(data);


}
    fetchListing();
 },[]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  //to handle update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');

      const res = await fetch(`/api/listings/update/${params.listingId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
   
          userRef: currentUser._id,
        }),
      });

      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      } else {
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <main className='p-3 max-w-4xl mx-auto'>
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
      {error && <p className='text-red-500'>{error}</p>}
    </main>
  );
}
