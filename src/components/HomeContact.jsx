
import React, { useState } from 'react';

function HomeContact() {
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [isDoctorDropdownOpen, setIsDoctorDropdownOpen] = useState(false);
  const [isDepartmentDropdownOpen, setIsDepartmentDropdownOpen] = useState(false);

  const handleDropdownToggle = (dropdownName) => {
    switch (dropdownName) {
      case 'date':
        setIsDateDropdownOpen(!isDateDropdownOpen);
        break;
      case 'time':
        setIsTimeDropdownOpen(!isTimeDropdownOpen);
        break;
      case 'doctor':
        setIsDoctorDropdownOpen(!isDoctorDropdownOpen);
        break;
      case 'department':
        setIsDepartmentDropdownOpen(!isDepartmentDropdownOpen);
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-blue-800 text-white p-4 rounded-lg">
      <table className="w-full">
        <tbody>
          <tr>
            <td className="py-2 border-b border-gray-700">Name</td>
            <td className="py-2 border-b border-gray-700">Gender</td>
          </tr>
          <tr>
            <td className="py-2 border-b border-gray-700">Email</td>
            <td className="py-2 border-b border-gray-700">Phone</td>
          </tr>
          <tr>
            <td className="py-2 border-b border-gray-700 relative">
              <div className="flex items-center justify-between">
                <span>Date</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ${
                    isDateDropdownOpen ? 'rotate-180' : ''
                  } transition-transform duration-200`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 4-7-4"
                  />
                </svg>
              </div>
              {isDateDropdownOpen && (
                <ul className="absolute top-full left-0 bg-blue-800 z-10">
                  {/* Add date options here */}
                </ul>
              )}
            </td>
            <td className="py-2 border-b border-gray-700 relative">
              <div className="flex items-center justify-between">
                <span>Time</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ${
                    isTimeDropdownOpen ? 'rotate-180' : ''
                  } transition-transform duration-200`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 4-7-4"
                  />
                </svg>
              </div>
              {isTimeDropdownOpen && (
                <ul className="absolute top-full left-0 bg-blue-800 z-10">
                  {/* Add time options here */}
                </ul>
              )}
            </td>
          </tr>
          <tr>
            <td className="py-2 border-b border-gray-700 relative">
              <div className="flex items-center justify-between">
                <span>Doctor</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ${
                    isDoctorDropdownOpen ? 'rotate-180' : ''
                  } transition-transform duration-200`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 4-7-4"
                  />
                </svg>
              </div>
              {isDoctorDropdownOpen && (
                <ul className="absolute top-full left-0 bg-blue-800 z-10">
                  {/* Add doctor options here */}
                </ul>
              )}
            </td>
            <td className="py-2 border-b border-gray-700 relative">
              <div className="flex items-center justify-between">
                <span>Department</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ${
                    isDepartmentDropdownOpen ? 'rotate-180' : ''
                  } transition-transform duration-200`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 4-7-4"
                  />
                </svg>
              </div>
              {isDepartmentDropdownOpen && (
                <ul className="absolute top-full left-0 bg-blue-800 z-10">
                  {/* Add department options here */}
                </ul>
              )}
            </td>
          </tr>
          <tr>
            <td className="py-2" colSpan={2}>
              <textarea
                className="w-full p-2 border border-gray-700 rounded"
                placeholder="Message"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        SUBMIT
      </button>
    </div>
  );
}

export default HomeContact;  