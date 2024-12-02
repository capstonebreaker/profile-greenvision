import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import ErrorPage from './pages/ErrorPage';
import Index from './route';
// import About from './pages/Home/About';
import Home from './pages/Home/Home'
// import UnderMaintenance from './pages/UnderMaintenance';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={< Home/>} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Route>
        {/* <Route path="/" element={<UnderMaintenance/>} /> */}
      </Routes>
    </Router>
  );
};

export default App;