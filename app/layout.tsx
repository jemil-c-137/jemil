'use client'

import React, { useState } from 'react';
import FileExplorer from '../components/FileExplorer';
import ThemeSwitcher from '../components/ThemeSwitcher';
import Tabs from '../components/Tabs';
import IconSidebar from '../components/IconSidebar';
import SettingsSidebar from '../components/SettingsSidebar';
import AIChatSidebar from '../components/AIChatSidebar';
import StoreProvider from '../components/StoreProvider';
import ThemeHandler from '../components/ThemeHandler';
import FontFamilyHandler from '../components/FontFamilyHandler';
import FontSizeHandler from '../components/FontSizeHandler';
import { RouteHandler } from '@/components/RouteHandler';
import "./globals.css";

const RootLayoutContent = React.memo(({ children }: { children: React.ReactNode }) => {
  const [leftSidebar, setLeftSidebar] = useState<'explorer' | 'search' | 'blog' | null>('explorer');
  const [rightSidebar, setRightSidebar] = useState<'settings' | 'aiChat' | null>(null);

  const toggleSidebar = (sidebar: 'explorer' | 'search' | 'blog' | 'settings' | 'aiChat') => {
    if (sidebar === 'explorer' || sidebar === 'search' || sidebar === 'blog') {
      setLeftSidebar(prev => prev === sidebar ? null : sidebar);
    } else {
      setRightSidebar(prev => prev === sidebar ? null : sidebar);
    }
  };

  RootLayoutContent.displayName = 'RootLayoutContent';

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      {/* Top System Bar */}
      <div className="bg-sidebar-bg text-sidebar-fg h-8 flex items-center justify-between px-4 border-b border-gray-300 dark:border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
        </div>
        <ThemeSwitcher />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <IconSidebar
          onToggleExplorer={() => toggleSidebar('explorer')}
          onToggleSearch={() => toggleSidebar('search')}
          onToggleSettings={() => toggleSidebar('settings')}
          onToggleAIChat={() => toggleSidebar('aiChat')}
          activeSidebars={{
            explorer: leftSidebar === 'explorer',
            search: leftSidebar === 'search',
            settings: rightSidebar === 'settings',
            aiChat: rightSidebar === 'aiChat',
          }}
        />

        {leftSidebar && (
          <div className="w-64 bg-sidebar-bg text-sidebar-fg overflow-y-auto border-r border-gray-300 dark:border-gray-700">
            {leftSidebar === 'explorer' && <FileExplorer />}
            {leftSidebar === 'search' && (
              <div className="p-4">Search functionality coming soon...</div>
            )}
            {leftSidebar === 'blog' && (
              <div className="p-4">Blog functionality coming soon...</div>
            )}
          </div>
        )}

        <div className="flex-1 overflow-hidden flex flex-col bg-background text-foreground">
          <Tabs />
          <div className="flex-1 overflow-y-auto p-4 dark:border-gray-700">
            {children}
          </div>
        </div>

        {rightSidebar && (
          <div className="w-64 bg-sidebar-bg text-sidebar-fg overflow-y-auto border-l border-gray-300 dark:border-gray-700">
            {rightSidebar === 'settings' && <SettingsSidebar />}
            {rightSidebar === 'aiChat' && <AIChatSidebar />}
          </div>
        )}
      </div>

      {/* Bottom Terminal */}
      <div className="h-32 bg-[var(--terminal-bg)] text-sidebar-fg border-t border-gray-300 dark:border-gray-700">
        {/* Terminal content (to be implemented) */}
      </div>
    </div>
  );
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StoreProvider>
          <RouteHandler />
          <ThemeHandler />
          <FontFamilyHandler />
          <FontSizeHandler />
          <RootLayoutContent>{children}</RootLayoutContent>
        </StoreProvider>
      </body>
    </html>
  );
}