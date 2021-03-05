import './Home.css';

import React, {useState, useRef, useCallback} from 'react';
import styled from 'styled-components';

// import Fetch from '../components/Fetch';
import Timeline from '../components/Line';
import useFetch from '../hooks/useFetch';

const Home = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  /* height: 100%; */
`;

const Col = styled.div`
  /* height: auto;
  width: 100px;
  background-color: red; */
`;

const Img = styled.div`
  /* position: absolute;
right: -20px; */
  height: auto;
  width: 200px;
`;

const Field = styled.input`
  height: 100px;
`;

const Homepage = () => {
  const [query, setQuery] = useState();
  const [page, setPage] = useState(0);

  const {synths, hasMore, loading, error} = useFetch(query, page);
  // console.log('synths', synths);
  const observer = useRef();
  // combining useRef with IntersectionObserver
  let options = {};

  const lastSynthElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
          // console.log('last element visible');
        }
      }, options);
      // what is node?
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleSearch = (e) => {
    // e.preventDefault();
    setQuery(e.target.value);
    setPage(1);
  };

  return (
    <Home>
      <Field type='text' value={query} onChange={handleSearch} />
      <Col>
        {synths.map((synth, index) => {
          // how does this check work?
          if (synths.length === index + 1) {
            return (
              <Img ref={lastSynthElementRef} key={index}>
                {' '}
                <p>{synth.name}</p>
                {<img key={index} src={synth.img} />}
              </Img>
            );
          } else {
            return (
              <Img key={index}>
                <p>{synth.name}</p>
                {<img key={index} src={synth.img} />}
              </Img>
            );
          }
        })}
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error'}</div>
        <br />
      </Col>
      {/* <Fetch /> */}
      <Timeline />
    </Home>
  );
};

export default Homepage;
