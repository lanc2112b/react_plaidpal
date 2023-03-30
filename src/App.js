import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import MainSection from './components/MainSection';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <Header />
        <Routes>
        <Route path="/" element={<MainSection element={<Landing />} />} />
        
        <Route path="/login" element={<MainSection element={<Login />} />} />
        <Route path="/dashboard" element={<MainSection element={<Dashboard />} />} />
        
        </Routes>
      <Footer />
    </>
  );
}

export default App;
