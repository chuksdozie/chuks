import React from 'react';
import UserHome from './UserHome';

interface Props {
  name?: string;
}

const Home: React.FC<Props> = () => {
  return (
    <>
      {' '}
      <UserHome />
    </>
  );
};

export default Home;
