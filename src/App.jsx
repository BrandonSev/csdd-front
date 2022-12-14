import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/DashboardPages/Home/Home';
import MemberArea from './components/DashboardPages/MemberArea/MemberArea';
import AccessRequest from './components/DashboardPages/AccessRequest/AccessRequest';
import Formation from './components/Formation/Formation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MemberArea" element={<MemberArea />} />
        <Route path="/AccessRequest" element={<AccessRequest />} />
        <Route path="/Formation" element={<Formation />} />
      </Routes>
    </div>
  );
}

export default App;
