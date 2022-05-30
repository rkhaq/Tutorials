import React, { useState } from 'react';

function Dashboard() {
  const [whoami, setWhoami] = useState('');
  const [error, setError] = useState('');

  React.useEffect(() => {
    fetch('http://localhost:8000/account/whoami/', {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        setWhoami(data.username);
      })
      .catch((err) => {
        console.log(err);
        setError('You are not logged in');
      });
  }, []);

  return (
    <>
      <div className="container">{whoami}</div>
    </>
  );
}

export default Dashboard;
