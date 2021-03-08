import './Home.css';

import React, {useState, useRef, useCallback} from 'react';
import Navigation from '../components/Navigation';
import Timeline from '../components/Timeline';
import Synth from '../components/Synth';
import Feedback from '../components/Feedback';
import styled from 'styled-components';

import useFetch from '../hooks/useFetch';

const Homepage = () => {
  const [query, setQuery] = useState();
  const [page, setPage] = useState(0);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPage(1);
  };

  // const myObserver = useRef();

  const {synths, hasMore, loading, error} = useFetch(query, page);
  const observer = useRef();

  let options = {};

  const lastSynthElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      }, options);
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <Home>
      {/* <Synth /> */}
      <Navigation query={query} handleSearch={handleSearch} />
      <Timeline>
        {synths.map((synth, index) => {
          if (synths.length === index + 1) {
            return (
              <Synth
                key={index}
                synth={synth}
                reference={lastSynthElementRef}
              />
            );
          } else {
            return <Synth key={index} synth={synth} />;
          }
        })}
        <Feedback loading={loading} error={error}>
          Hallo
        </Feedback>
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
