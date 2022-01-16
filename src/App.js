import React, { useState } from 'react';

function App() {
  const [click, setClick] = useState(0);
  return (
    <div>
      <h1>{click}</h1>
      <button onClick={() => setClick(click + 1)} type="button"> Click</button>
    </div>
  );
}

export default App;
