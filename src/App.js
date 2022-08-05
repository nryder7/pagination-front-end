import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
import paginate from './utils';
function App() {
  const { loading, data } = useFetch();
  const [pageIndex, setPageIndex] = useState(0);
  const [people, setPeople] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    if (loading) return;
    const pageObj = paginate(itemsPerPage, data);
    setPeople(pageObj.pageArr);
    setPageCount(pageObj.pageCount);
  }, [data, loading, pageIndex]);

  const handleIndex = (e) => {
    const direction = e.target.textContent;
    if (direction === 'prev') {
      if (pageIndex === 0) {
        setPageIndex(pageCount - 1);
      } else {
        setPageIndex(pageIndex - 1);
      }
    }
    if (direction === 'next') {
      if (pageIndex === pageCount - 1) {
        setPageIndex(0);
      } else {
        setPageIndex(pageIndex + 1);
      }
    }
  };

  return (
    <>
      <h2 className='section-title'>pagination</h2>
      <main>
        <section className='section section-center'>
          <div className='container'>
            {people.length > 1 &&
              people[pageIndex].map((person) => {
                return <Follower key={person.id} {...person} />;
              })}
          </div>
          {!loading && (
            <div className='btn-container'>
              <button className='prev-btn' onClick={(e) => handleIndex(e)}>
                prev
              </button>
              {people.map((item, index) => (
                <button
                  className={
                    index === pageIndex ? 'page-btn active-btn' : 'page-btn'
                  }
                  key={index}
                  onClick={(e) => setPageIndex(index)}
                >
                  {index + 1}
                </button>
              ))}
              <button className='next-btn' onClick={(e) => handleIndex(e)}>
                next
              </button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
