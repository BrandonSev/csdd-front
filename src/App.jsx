import { useState } from 'react';
import Input from './components/Input';
import RemoveMe from './components/RemoveMe';

function App() {
  const [state, setState] = useState({});
  return (
    <div className="App">
      <RemoveMe />
      <Input
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
        value={state?.email}
        name="email"
        handleChange={(e) => setState({ ...state, email: e.target.value })}
      />
      <Input
        type="text"
        className="input-orange"
        value={state?.telephone}
        name="telephone"
        handleChange={(e) => setState({ ...state, telephone: e.target.value })}
      />
    </div>
  );
}

export default App;
