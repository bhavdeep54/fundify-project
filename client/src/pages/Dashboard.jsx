import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from '../api/user';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const userData = await getUserProfile(token);
        setUser(userData);
      } catch (err) {
        setError('Unauthorized. Please log in again.');
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    fetchProfile();
  }, [navigate]);

  if (error) return <div className="p-8 text-red-500">{error}</div>;
  if (!user) return <div className="p-8">Loading your profile...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-green-400 mb-4">Welcome, {user.name}!</h1>
        <p className="text-lg text-gray-300 mb-2">Email: {user.email}</p>
        <p className="text-md text-gray-400">This is your Fundify dashboard.</p>
        <button
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/login');
          }}
          className="mt-4 px-4 py-2 bg-red-500 rounded hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>

      </div>
    </div>
  );
}
