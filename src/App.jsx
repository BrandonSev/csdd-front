import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/DashboardPages/Home/Home';
import MemberArea from './components/DashboardPages/MemberArea/MemberArea';
import AccessRequest from './components/DashboardPages/AccessRequest/AccessRequest';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MemberArea" element={<MemberArea />} />
        <Route path="/AccessRequest" element={<AccessRequest />} />
        {/* <Input
        type="text"
        className="input-orange"
        value={state?.firstname}
        name="firstname"
        handleChange={(e) => setState({ ...state, firstname: e.target.value })}
      />
      <Input
        type="text"
        className="input-orange"
        value={state?.lastname}
        name="lastname"
        handleChange={(e) => setState({ ...state, lastname: e.target.value })}
      />
      <Input
        type="text"
        className="input-orange"
        value={state?.telephone}
        name="telephone"
        handleChange={(e) => setState({ ...state, telephone: e.target.value })}
      /> */}
      </Routes>
    </div>
  );
}

export default App;
