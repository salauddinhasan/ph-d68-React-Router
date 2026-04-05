import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className=" flex gap-10">
      <aside className="w-1/4 bg-gray-100 p-5 rounded-lg">
        <h2 className="font-bold mb-4">Menu</h2>
        <ul className="space-y-3">
          <li>
            <Link to="profile" className="text-blue-500">
              Profile
            </Link>
          </li>
          <li>
            <Link to="settings" className="text-blue-500">
              Setting
            </Link>
          </li>
        </ul>
      </aside>

      <main className="flex-1 p-5 border rounded-lg bg-gray-50">
        <h1 className="text-xl font-bold mb-4 text-purple-600">
          dashboard panel
        </h1>

        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;



