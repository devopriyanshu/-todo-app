import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Index from './routes';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const quertClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <QueryClientProvider client={quertClient}>
  
    <Index/>
  
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  </StrictMode>
)
