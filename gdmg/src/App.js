import './App.css';
import AppShellComponent from './components/AppShellComponent';
import Dashboard from './pages/Dashboard';
import Mail from './pages/Mail';
import Analytics from './pages/Analytics';
import { Route,Routes } from 'react-router-dom';
import Calendar from './pages/Calendar';
import Receipts from './pages/Receipts';
import SignIn from './pages/SignIn';
import { AuthenticationForm } from './pages/SignUp';
function App() {
  return (

    <>
    <Routes>
    <Route path='/' element={<AuthenticationForm />}/>
    <Route path='/register' />
    <Route path='/dashboard' element={<Dashboard />}/>
    <Route path='/mail' element={<Mail/>}/>
    <Route path='/analytics' element={<Analytics />}/>
    <Route path='calendar' element={<Calendar />}/>
    <Route path='/receipts' element={<Receipts />}/>
    </Routes>
    </>
    );
}

export default App;
