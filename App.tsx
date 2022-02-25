import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes } from './src/routes';

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client} >
      <Routes />
    </QueryClientProvider>
  );
}
