import React from 'react';

const Follower = (props) => {
  const { avatar_url: url, login } = props;

  return (
    <div className='card'>
      <div className='container'>
        <img src={url} alt={login} className='img' />
      </div>
    </div>
  );
};

export default Follower;
