import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';
import Loading from './common/components/loading'

function App() {
  return (
    <BrowserRouter>
      <Loading>
        <AppRoutes/>
      </Loading>
    </BrowserRouter>
  );
}

export default App;
