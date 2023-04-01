import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './contexts/User'
import MainSection from './components/MainSection';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Signup from './components/SignUp';
import Summary from './components/Summary';
import ReactCharts2Examples from './components/ReactChart2Examples';
//import Dashboard from './components/Dashboard';

function App() {

  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <Header />
        <Routes>
        <Route path="/" element={<MainSection element={<Landing />} />} />
        <Route path="/signup" element={<MainSection element={!user.email ? <Signup/> : <Landing/>} />} />
        <Route path="/login" element={<MainSection element={!user.email ? <Login/> : <Landing/>} />} />
        <Route path="/dashboard" element={<MainSection element={<Dashboard />} />} />
        <Route path="/summary" element={<MainSection element={<Summary />} />} />
        <Route path="/react2chart" element={<MainSection element={<ReactCharts2Examples />} />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
