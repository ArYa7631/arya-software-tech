import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@/components/theme-provider';

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </ThemeProvider>
}
