// src/App.tsx
 import { BrowserRouter } from 'react-router-dom';
// import { AppRoutes } from './routes/AppRoutes';
 import './App.css';
import { AppRoutes } from './routes/AppRoutes';
import { AppProviders } from './providers/AppProviders';

function App() {
  return (
 
      <BrowserRouter>
      <AppProviders>
        <AppRoutes />
      </AppProviders>
      </BrowserRouter>
   );
}

export default App;