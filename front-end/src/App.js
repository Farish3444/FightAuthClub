import logo from './logo.svg';
import './App.css';
import BoxLayout from './components/BoxLayout';
import AllRoutes from './routes/Routes';
import Header from './components/Header';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
    <Toaster />
    <header className="App-header">
      <AllRoutes /> 
  </header>
  </div>
  );
}

export default App;
