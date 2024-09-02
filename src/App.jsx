import { useState } from 'react';
import Body from './components/layout/body';
import Header from './components/layout/header';

export default function App() {
  const [savedValues, setSavedValues] = useState([]);

  const addSavedValue = (value) => {
    setSavedValues((prevValues) => [...prevValues, value]);
  };

  return (
    <div>
      <Header addSavedValue={addSavedValue} />
      <Body savedValues={savedValues} />
    </div>
  );
}
