import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiHome, HiAcademicCap, HiInformationCircle, HiBookOpen } from 'react-icons/hi';
import clsx from 'clsx';

const navItems = [
  { icon: HiHome, label: 'Home', path: '/' },
  { icon: HiAcademicCap, label: 'Courses', path: '/courses' },
  { icon: HiInformationCircle, label: 'About Us', path: '/about' },
  { icon: HiBookOpen, label: 'Resources', path: '/resources' },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={clsx(
        'h-screen bg-gray-800 text-white transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 flex items-center justify-between">
          {!isCollapsed && <h1 className="text-xl font-bold">Platform</h1>}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-700"
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>
        
        <nav className="flex-1">
          {navItems.map(({ icon: Icon, label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                clsx(
                  'flex items-center px-4 py-3 hover:bg-gray-700',
                  isActive && 'bg-gray-700'
                )
              }
            >
              <Icon className="w-6 h-6" />
              {!isCollapsed && <span className="ml-3">{label}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;