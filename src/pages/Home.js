import './Home.css';

import React, {useState, useRef, useCallback} from 'react';
import Navigation from '../components/Navigation';
import Timeline from '../components/Timeline';
import Synth from '../components/Synth';
import Feedback from '../components/Feedback';
import styled from 'styled-components';

import useFetch from '../hooks/useFetch';
import axios from 'axios';

const Homepage = () => {
  const [query, setQuery] = useState();
  const [page, setPage] = useState(0);

  // useEffect(() => {
  //   effect;
  //   return () => {
  //     cleanup;
  //   };
  // }, []);

  // if yearProduced =

  // useEffect(() => {
  //   axios({
  //     method: 'GET',
  //     url: 'https://synthesizer-api.herokuapp.com/api/manufacturers',
  //   });
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPage(0);
  };

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

  console.log('query', query);

  return (
    <Home>
      <Navigation query={query} handleSearch={handleSearch} />
      {/* <NavigationSpacer /> */}
      <Timeline>
        {synths.map((synth, index) => {
          if (synths.length === index + 1) {
            return (
              <Synth
                key={index}
                synth={synth}
                index={index}
                reference={lastSynthElementRef}
                loading={loading}
              />
            );
          } else {
            // console.log('intex', index);
            return <Synth key={index} synth={synth} index={index} />;
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

// const NavigationSpacer = styled.div`
//   height: 40px;
//   display: block;
// `;

export default Homepage;
