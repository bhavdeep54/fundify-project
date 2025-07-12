import axios from 'axios';

const API_URL = 'http://localhost:5000/api/user';

export const getUserProfile = async (token) => {
  const res = await axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
