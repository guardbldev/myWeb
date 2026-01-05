import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50 p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="font-bold text-2xl">Buildify Dashboard</h1>
        <button className="rounded-full px-5 py-2 font-semibold bg-indigo-600 text-white shadow-md hover:bg-indigo-700">
          Account
        </button>
      </header>

      <div className="flex gap-6 flex-wrap">
        {/* Loop over user's sites here */}
        <div className="bg-white rounded-2xl p-6 w-72 shadow-md flex flex-col">
          <div className="font-semibold text-xl mb-2">My Portfolio</div>
          <div className="text-gray-600 mb-4">Status: Live</div>
          <Link to="/studio/portfolio123" className="rounded-lg bg-indigo-500 px-4 py-2 text-white text-center font-bold hover:bg-indigo-700 transition">
            Open Studio
          </Link>
        </div>
        {/* Add 'New site' button */}
        <div className="whitespace-nowrap bg-gradient-to-tr from-indigo-400 to-pink-400 rounded-2xl p-6 w-72 shadow-md flex items-center justify-center text-white text-lg font-semibold hover:scale-105 transition cursor-pointer">
          + New Website
        </div>
      </div>
    </div>
  );
}