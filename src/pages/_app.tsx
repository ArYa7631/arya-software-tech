import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from '@/components/theme-provider';
import { Provider } from 'react-redux';
import { store } from '@/app/store';

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>)
}
