import React, { useState } from 'react';
import Header from './Header';

function App() {
  const [click, setClick] = useState(0);
  return (
    <div>
      <h1>{click}</h1>
      <button onClick={() => setClick(click + 1)} type="button"> Click</button>
      <Header></Header>
    </div>
  );
}

export default App;
