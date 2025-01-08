import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import type { MenuItem, SubMenuItem } from '../../types';

interface MegaMenuProps {
  item: MenuItem;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ item }) => {
  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-gray-900">
            {item.title}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                open ? 'rotate-180' : ''
              }`}
            />
          </Menu.Button>

          <Menu.Items className="absolute left-0 z-10 mt-2 w-screen max-w-md rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="p-4">
              <div className="grid grid-cols-1 gap-4">
                {item.submenu?.map((subItem: SubMenuItem) => (
                  <Menu.Item key={subItem.path}>
                    {({ active }) => (
                      <Link
                        to={subItem.path}
                        className={`flex flex-col p-3 rounded-lg transition-colors ${
                          active ? 'bg-gray-50' : ''
                        }`}
                      >
                        <span className="font-medium text-gray-900">
                          {subItem.title}
                        </span>
                        {subItem.description && (
                          <span className="mt-1 text-sm text-gray-500">
                            {subItem.description}
                          </span>
                        )}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </div>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default MegaMenu;