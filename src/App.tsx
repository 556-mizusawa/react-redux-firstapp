import React from 'react';

interface AppProps {
  name?: string;
  age?: number;
}

const App: React.FunctionComponent<AppProps> = () => {
  const profiles: {
    name: string;
    age?: number;
  }[] = [
    { name: 'Taro', age: 10 },
    { name: 'Hanako', age: 5 },
    { name: 'Noname' },
  ];

  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = (props: AppProps) => {
  return (
    <div>
      <p>Hi, I am {props.name},</p>
      <p>and {props.age} years old</p>
    </div>
  );
};

User.defaultProps = {
  age: 1,
};

export default App;
