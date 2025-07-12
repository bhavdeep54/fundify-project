import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signupUser } from "../api/auth";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signupUser(form);
      navigate("/login");
    } catch (err) {
      alert("Signup error!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4 text-center text-purple-700">New User?</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <button type="submit" className="bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition">Sign Up</button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-700 font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
