import React, { useState } from 'react';
import Token from './Token';
import Students from './admin/Students';
import Allotment from './admin/allotment';
import RoomDetails from './admin/RoomDetails';
import Complains from './admin/Complains';
import TokenRequest from './admin/tokenrequest';
import Tokendetails from './admin/tokendetails';
import FeesRequest from './admin/feesrequest';
import FeesDetails from './admin/feesdetails';
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
        return <Students />;
      case 'notices':
        return <div className="p-4">All Notices Information Goes Here</div>;
      case 'createAnnouncement':
        return <div className="p-4">Create Announcement Form Goes Here</div>;
      case 'Allotment_Request':
          return <Allotment/>;
      case 'Room_details':
          return <RoomDetails/>;
      case 'complains':
          return <Complains/>;
      case 'tokenrequest':
        return <TokenRequest/>;
      case 'tokendetails':
        return <Tokendetails/>;
      case 'feesrequest':
        return <FeesRequest/>;
      case 'feesdetails':
        return <FeesDetails/>;
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
          <li>
            <button
              className={`${
                selectedTab === 'Allotment_Request'
                  ? 'bg-blue-500 text-white'
                  : ''
              } py-2 px-4 w-full rounded`}
              onClick={() => handleTabClick('Allotment_Request')}
            >
              Allotment_Request
            </button>
          </li>
          <li>
            <button
              className={`${
                selectedTab === 'Room_details'
                  ? 'bg-blue-500 text-white'
                  : ''
              } py-2 px-4 w-full rounded`}
              onClick={() => handleTabClick('Room_details')}
            >
              Room Details
            </button>
          </li>
          <li>
            <button
              className={`${
                selectedTab === 'complains'
                  ? 'bg-blue-500 text-white'
                  : ''
              } py-2 px-4 w-full rounded`}
              onClick={() => handleTabClick('complains')}
            >
              Complains
            </button>
          </li>
          <li>
            <button
              className={`${
                selectedTab === 'tokenrequest'
                  ? 'bg-blue-500 text-white'
                  : ''
              } py-2 px-4 w-full rounded`}
              onClick={() => handleTabClick('tokenrequest')}
            >
              Token Request
            </button>
          </li>
          <li>
            <button
              className={`${
                selectedTab === 'tokendetails'
                  ? 'bg-blue-500 text-white'
                  : ''
              } py-2 px-4 w-full rounded`}
              onClick={() => handleTabClick('tokendetails')}
            >
              Token Details
            </button>
          </li>
          <li>
            <button
              className={`${
                selectedTab === 'feesrequest'
                  ? 'bg-blue-500 text-white'
                  : ''
              } py-2 px-4 w-full rounded`}
              onClick={() => handleTabClick('feesrequest')}
            >
              Hall Fees Request
            </button>
          </li>
          <li>
            <button
              className={`${
                selectedTab === 'feesdetails'
                  ? 'bg-blue-500 text-white'
                  : ''
              } py-2 px-4 w-full rounded`}
              onClick={() => handleTabClick('feesdetails')}
            >
              Hall Fees Details
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
