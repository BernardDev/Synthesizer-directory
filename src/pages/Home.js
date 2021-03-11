import React, {useState, useRef, useCallback} from 'react';
import useFetch from '../hooks/useFetch';
import Navigation from '../components/Navigation';
import Timeline from '../components/Timeline';
import Synth from '../components/Synth';
import Feedback from '../components/Feedback';
import styled from 'styled-components';

const Homepage = () => {
  const [query, setQuery] = useState();
  const [page, setPage] = useState(0);
  const {synths, hasMore, loading, error} = useFetch(query, page);
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
        <Feedback loading={loading} error={error} />
      </Timeline>
    </Home>
  );
};

const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default Homepage;
