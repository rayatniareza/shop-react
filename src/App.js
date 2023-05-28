import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';
import Loading from './common/components/Loading'
import { QueryClientProvider, QueryClient } from 'react-query';

function App() {
  const queryClient = new QueryClient()
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Loading>
          <AppRoutes/>
        </Loading>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
