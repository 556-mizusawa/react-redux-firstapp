import React from 'react';
import Counter from './counter';

interface UserProps {
  name?: string;
  age?: number;
}

const App: React.FC<UserProps> = () => {
  return <Counter />;
};

export default App;
