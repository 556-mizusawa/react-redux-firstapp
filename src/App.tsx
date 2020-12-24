import React from 'react';

function App() {
  const inputbutton = (): void => console.log('hello');

  return (
    <div>
      <h1>Hello World</h1>
      <input type="text" onClick={inputbutton} />
    </div>
  );
}

export default App;
