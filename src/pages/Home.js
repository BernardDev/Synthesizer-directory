import React, {useState, useRef, useCallback} from 'react';
import useFetchSynths from '../hooks/useFetchSynths';
import Navigation from '../components/Navigation';
import Timeline from '../components/Timeline';
import Synth from '../components/Synth';
import Feedback from '../components/Feedback';
import Spinner from '../components/Spinner';
import styled from 'styled-components';

const Homepage = () => {
  const [query, setQuery] = useState();
  const [page, setPage] = useState(0);
  const {synths, hasMore, loading, error} = useFetchSynths(query, page);
  const observer = useRef();

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPage(0);
  };

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
      <Navigation query={query} handleSearch={handleSearch} />
      {loading || error ? (
        <Frame>
          <Spinner width={400} loading={loading} />
          <Feedback loading={loading} error={error} />
        </Frame>
      ) : (
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
  /* background-color: pink; */
`;

const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default Homepage;
