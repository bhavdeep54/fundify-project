import React from "react";

export default function Modal({ title, isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
