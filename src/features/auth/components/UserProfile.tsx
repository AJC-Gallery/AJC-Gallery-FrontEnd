// src/features/auth/components/UserProfile.tsx
import React from 'react';

export const UserProfile: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-gray-900">User Profile</h3>
      <p className="text-gray-600 text-sm mt-1">
        Profile component - will be implemented in Phase 2
      </p>
    </div>
  );
};

// Create a simple UserButton for the layout
export const UserButton: React.FC = () => {
  return (
    <button className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium text-gray-700">
      User Menu
    </button>
  );
};