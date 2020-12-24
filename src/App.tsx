import React from 'react';

interface UserProps {
  name?: string;
  age?: number;
}

const App: React.FunctionComponent<UserProps> = () => {
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

const User = (props: UserProps) => {
  return (
    <div>
      <p>Hi, I am {props.name},</p>
      <p>and {props.age} years old</p>
    </div>
  );
};

User.defaultProps = {
  age: 'Secrets',
};

export default App;
