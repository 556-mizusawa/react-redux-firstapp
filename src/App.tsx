import React from 'react';

// function App() {
//   const inputbutton = (): void => console.log('hello');

//   return (
//     <div>
//       <h1>Hello World</h1>
//       <input type="text" onClick={inputbutton} />
//     </div>
//   );
// }

const App: () => JSX.Element = () => {
  return (
    <div>
      <Cat />
    </div>
  );
};

const Cat: () => JSX.Element = () => <div>Meow!</div>;

export default App;
