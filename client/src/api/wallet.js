import axios from "axios";

const API_URL = "http://localhost:5000/api/wallet"; // change port if needed

export const getWallet = (token) =>
  axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } });

export const addFunds = (data, token) =>
  axios.post(`${API_URL}/add`, data, { headers: { Authorization: `Bearer ${token}` } });

export const withdrawFunds = (data, token) =>
  axios.delete(`${API_URL}/withdraw`, {
    headers: { Authorization: `Bearer ${token}` },
    data
  });
