import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
import paginate from './utils';
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState([]);
  const [remainder, setRemainder] = useState(0);
  const perPage = 3;
  console.log(page);

  useEffect(() => {
    if (data.length % perPage) {
      setRemainder(1);
    }
    const list = paginate(page, perPage, data);
    setPeople(list);
  }, [loading, page]);

  const handleClick = (e) => {
    const direction = e.target.textContent;
    if (direction === 'prev') {
      if (page === 1) {
        setPage(Math.floor(data.length / perPage) + remainder);
      } else {
        setPage(page - 1);
      }
    }
    if (direction === 'next') {
      if (page === Math.floor(data.length / perPage) + remainder) {
        setPage(1);
      } else {
        setPage(page + 1);
      }
    }
  };

  return (
    <>
      <h2>pagination starter</h2>
      <main>
        <section className='section section-center'>
          <div className='container'>
            {people &&
              people.map((person) => {
                return <Follower key={person.id} {...person} />;
              })}
          </div>
          <div className='btn-container'>
            <button onClick={(e) => handleClick(e)}>prev</button>
            <button onClick={(e) => handleClick(e)}>next</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
