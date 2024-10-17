"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaFolder, FaFolderOpen, FaFile, FaChevronRight, FaChevronDown } from 'react-icons/fa';

interface FileItem {
  name: string;
  type: 'folder' | 'file';
  path: string;
  children?: FileItem[];
}

const fileStructure: FileItem[] = [
  {
    name: 'Homepage',
    type: 'folder',
    path: '/',
    children: [
      { name: 'page.tsx', type: 'file', path: '/' },
      { name: 'about.tsx', type: 'file', path: '/about' },
      { name: 'skills.tsx', type: 'file', path: '/skills' },
    ],
  },
  {
    name: 'Projects',
    type: 'folder',
    path: '/projects',
    children: [
      { name: 'project1.py', type: 'file', path: '/projects/1' },
      { name: 'project2.php', type: 'file', path: '/projects/2' },
    ],
  },
  {
    name: 'Blog',
    type: 'folder',
    path: '/blog',
    children: [
      { name: 'post1.md', type: 'file', path: '/blog/1' },
      { name: 'post2.md', type: 'file', path: '/blog/2' },
    ],
  },
  { name: 'settings.tsx', type: 'file', path: '/settings' },
];

const FileExplorer: React.FC = () => {
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set(['/']));
  const router = useRouter();

  const toggleFolder = (path: string) => {
    setOpenFolders(prev => {
      const newSet = new Set(prev);
      if (newSet.has(path)) {
        newSet.delete(path);
      } else {
        newSet.add(path);
      }
      return newSet;
    });
  };

  const handleItemClick = (item: FileItem) => {
    if (item.type === 'folder') {
      toggleFolder(item.path);
    } else {
      router.push(item.path);
    }
  };

  const renderFileItem = (item: FileItem, depth: number = 0) => {
    const isOpen = openFolders.has(item.path);

    return (
      <div key={item.path} style={{ paddingLeft: `${depth * 12}px` }}>
        <div 
          className={`flex items-center py-1 hover:bg-gray-200 dark:hover:bg-[#2a2d2e] text-gray-800 dark:text-[#cccccc] cursor-pointer ${
            item.type === 'folder' ? 'font-semibold' : ''
          }`}
          onClick={() => handleItemClick(item)}
        >
          {item.type === 'folder' && (
            isOpen ? <FaChevronDown className="mr-2 text-gray-500 dark:text-[#cccccc]" size={10} /> 
                   : <FaChevronRight className="mr-2 text-gray-500 dark:text-[#cccccc]" size={10} />
          )}
          {item.type === 'folder' 
            ? (isOpen ? <FaFolderOpen className="mr-2 text-yellow-500 dark:text-[#c09553]" /> : <FaFolder className="mr-2 text-yellow-500 dark:text-[#c09553]" />)
            : <FaFile className="mr-2 text-gray-500 dark:text-[#cccccc]" />
          }
          <span className="text-sm">{item.name}</span>
        </div>
        {item.children && isOpen && (
          <div>
            {item.children.map(child => renderFileItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-4 text-gray-800 dark:text-[#cccccc]">
      <h2 className="text-sm font-semibold mb-4 uppercase">Explorer</h2>
      {fileStructure.map(item => renderFileItem(item))}
    </div>
  );
};

export default FileExplorer;
