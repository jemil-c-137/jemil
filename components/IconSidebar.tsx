"use client";

import React from 'react';
import { FaFolder, FaSearch, FaCog, FaRobot, FaBook } from 'react-icons/fa';

interface IconSidebarProps {
  onToggleExplorer: () => void;
  onToggleSearch: () => void;
  onToggleSettings: () => void;
  onToggleAIChat: () => void;
  onToggleBlog: () => void;
  activeSidebars: {
    explorer: boolean;
    search: boolean;
    settings: boolean;
    aiChat: boolean;
    blog: boolean;
  };
}

const IconSidebar: React.FC<IconSidebarProps> = ({ 
  onToggleExplorer, 
  onToggleSearch, 
  onToggleSettings, 
  onToggleAIChat,
  onToggleBlog,
  activeSidebars 
}) => {
  return (
    <div className="w-12 dark:bg-[#333333] flex flex-col items-center py-4 justify-between">
      <div>
        <button
          onClick={onToggleExplorer}
          className={`p-2 mb-2 ${activeSidebars.explorer ? 'bg-white dark:bg-[#252526]' : 'hover:bg-gray-300 dark:hover:bg-[#2a2d2e]'}`}
        >
          <FaFolder className="text-gray-600 dark:text-[#cccccc]" size={24} />
        </button>
        <button
          onClick={onToggleSearch}
          className={`p-2 ${activeSidebars.search ? 'bg-white dark:bg-[#252526]' : 'hover:bg-gray-300 dark:hover:bg-[#2a2d2e]'}`}
        >
          <FaSearch className="text-gray-600 dark:text-[#cccccc]" size={24} />
        </button>
        <button
          onClick={onToggleBlog}
          className={`p-2 ${activeSidebars.blog ? 'bg-white dark:bg-[#252526]' : 'hover:bg-gray-300 dark:hover:bg-[#2a2d2e]'}`}
        >
          <FaBook className="text-gray-600 dark:text-[#cccccc]" size={24} />
        </button>
      </div>
      <div>
        <button
          onClick={onToggleAIChat}
          className={`p-2 mb-2 ${activeSidebars.aiChat ? 'bg-white dark:bg-[#252526]' : 'hover:bg-gray-300 dark:hover:bg-[#2a2d2e]'}`}
        >
          <FaRobot className="text-gray-600 dark:text-[#cccccc]" size={24} />
        </button>
        <button
          onClick={onToggleSettings}
          className={`p-2 ${activeSidebars.settings ? 'bg-white dark:bg-[#252526]' : 'hover:bg-gray-300 dark:hover:bg-[#2a2d2e]'}`}
        >
          <FaCog className="text-gray-600 dark:text-[#cccccc]" size={24} />
        </button>
      </div>
    </div>
  );
};

export default IconSidebar;
