import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Column 1 - About Us */}
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-2">About Us</h1>
            <p>
              Create,Manage and Assign<br/>
              Making Your Work Simple
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-2">Quick Links</h1>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact Information */}
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
            <p>74 Bloor St.</p>
            <p>Toronto, Ontario</p>
            <p>Email: equal-tasks@task.ca</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-900 text-center py-2">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} EqualTasks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
