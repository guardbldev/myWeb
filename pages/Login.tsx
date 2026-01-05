import React from 'react';

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="p-10 rounded-3xl shadow-lg bg-white/10 backdrop-blur-md w-96 max-w-full flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-center mb-2">Buildify 🔷</h1>
        <p className="text-center text-lg">Sign in to start creating beautiful websites.</p>

        <button className="rounded-xl px-4 py-2 font-semibold bg-gray-800 text-white hover:bg-gray-900 transition flex items-center gap-2">
          <span className="i-mdi:github"></span> Sign in with GitHub
        </button>
        <button className="rounded-xl px-4 py-2 font-semibold bg-red-600 text-white hover:bg-red-700 transition flex items-center gap-2">
          <span className="i-mdi:google"></span> Sign in with Google
        </button>
        <button className="rounded-xl px-4 py-2 font-semibold bg-blue-600 text-white hover:bg-blue-700 transition flex items-center gap-2">
          <span className="i-mdi:microsoft"></span> Sign in with Microsoft
        </button>

        <div className="text-center text-xs text-white/70 mt-4">By continuing you agree to Buildify’s Terms of Service.</div>
      </div>
    </div>
  );
}