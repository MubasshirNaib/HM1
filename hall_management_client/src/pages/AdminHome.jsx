import React, { useState } from 'react';
import Token from './Token';
import YourComponent from './admin/students';
// Assuming you have a function for logging out


const AdminHome = () => {
  const [selectedTab, setSelectedTab] = useState('students');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleLogout = () => {
    console.log('clicked logout');
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'students':
        return <YourComponent />;
      case 'notices':
        return <div className="p-4">All Notices Information Goes Here</div>;
      case 'createAnnouncement':
        return <div className="p-4">Create Announcement Form Goes Here</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Hall Management</h1>
          <button onClick={handleLogout} className="text-sm bg-white text-blue-500 px-3 py-1 rounded">
            Logout
          </button>
          {/* You can replace the button with a logout icon */}
          {/* Example: <FontAwesomeIcon icon={faSignOutAlt} onClick={handleLogout} /> */}
        </div>
      </header>

      {/* Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
      <div className="w-1/4 bg-gray-200">
        <ul className="list-none p-4">
          <li>
            <button
              className={`${
                selectedTab === 'students' ? 'bg-blue-500 text-white' : ''
              } py-2 px-4 w-full rounded`}
              onClick={() => handleTabClick('students')}
            >
              Students
            </button>
          </li>
          <li>
            <button
              className={`${
                selectedTab === 'notices' ? 'bg-blue-500 text-white' : ''
              } py-2 px-4 w-full rounded`}
              onClick={() => handleTabClick('notices')}
            >
              Notices
            </button>
          </li>
          <li>
            <button
              className={`${
                selectedTab === 'createAnnouncement'
                  ? 'bg-blue-500 text-white'
                  : ''
              } py-2 px-4 w-full rounded`}
              onClick={() => handleTabClick('createAnnouncement')}
            >
              Create Announcement
            </button>
          </li>
          {/* Add more tabs as needed */}
        </ul>
      </div>

        {/* Right side content */}
        <div className="flex-1 p-8">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default AdminHome;
