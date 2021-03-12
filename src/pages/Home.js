import React, {useState, useRef, useCallback} from 'react';
import useFetchSynths from '../hooks/useFetchSynths';
import Navigation from '../components/Navigation';
import Timeline from '../components/Timeline';
import Synth from '../components/Synth';
import Feedback from '../components/Feedback';
import Spinner from '../components/Spinner';
import styled from 'styled-components';
import useFetchManufacturers from '../hooks/useFetchManufacturers';

const Homepage = () => {
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState();
  const manufacturers = useFetchManufacturers();
  const {synths, hasMore, loading, error} = useFetchSynths(
    query,
    page,
    manufacturers
  );

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPage(0);
  };

  const observer = useRef();

  const paginationTrigger = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      let options = {};

      observer.current = new IntersectionObserver(([lastElementOnPage]) => {
        if (lastElementOnPage.isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      }, options);
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <Home>
      <Navigation
        query={query}
        handleSearch={handleSearch}
        manufacturers={manufacturers}
      />
      {error ? (
        <Frame>
          <Feedback loading={loading} error={error} />
        </Frame>
      ) : (
        <>
          <Timeline>
            {synths.map((synth, index) => {
              const isLastSynthesizer = synths.length === index + 1;
              return isLastSynthesizer ? (
                <Synth
                  key={index}
                  synth={synth}
                  index={index}
                  reference={paginationTrigger}
                  loading={loading}
                />
              ) : (
                <Synth key={index} synth={synth} index={index} />
              );
            })}
          </Timeline>
          {loading && (
            <Frame>
              <Spinner width={400} loading={loading} />{' '}
            </Frame>
          )}
        </>
      )}
    </Home>
  );
};

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
`;

const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default Homepage;
