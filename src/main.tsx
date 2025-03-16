import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './index.css';
import App from './App.tsx';
import ThemeContextProvider from './context/themeContext.tsx';
import UserContextProvider from './context/userContext.tsx';

const queryClient = new QueryClient();

const deferRender = async () => {
  const { worker } = await import('./mocks/browser.ts');
  worker.start();
};

deferRender().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <UserContextProvider>
        <ThemeContextProvider>
          <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ThemeContextProvider>
      </UserContextProvider>
    </StrictMode>
  );
});
