import './App.css';
import AppShellComponent from './components/AppShellComponent';
import Dashboard from './pages/Dashboard';
import Mail from './pages/Mail';
import Analytics from './pages/Analytics';
import { Route,Routes } from 'react-router-dom';
import Calendar from './pages/Calendar';
import Receipts from './pages/Receipts';
function App() {
  return (

    <>
    <Routes>
    <Route path='/' />
    <Route path='/register' />
    <Route path='/dashboard' element={<Dashboard />}/>
    <Route path='/mail' element={<Mail/>}/>
    <Route path='/analytics' element={<Analytics />}/>
    <Route path='calendar' element={<Calendar />}/>
    <Route path='/receipts' element={<Receipts />}/>
    </Routes>
    <AppShellComponent />
    </>
    );
}

export default App;
