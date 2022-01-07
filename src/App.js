import './App.css';
import ReviewList from 'pages/reviews/RivewsList';
import Profile from 'pages/accounts/Profile';
import Login from 'pages/accounts/Login';
import { Routes, Route } from 'react-router-dom';
import TopNav from 'components/TopNav';

function App() {
  return (
    <div>
      <TopNav />
      <Routes>
        <Route path="/accounts/login/" element={<Login />} />
        <Route path="/accounts/profile/" element={<Profile />} />
        <Route path="/reviews/" element={<ReviewList />} />
      </Routes>
    </div>
  );
}

export default App;
