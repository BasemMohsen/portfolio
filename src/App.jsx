
import React from 'react';
import PortfolioPage from '@/pages/PortfolioPage';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/ThemeProvider';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <PortfolioPage />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
  