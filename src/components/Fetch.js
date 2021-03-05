import './Fetch.scss';
import styled from 'styled-components';

import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Col = styled.div`
  height: auto;
  width: 100px;
  background-color: red;
`;

const Img = styled.div`
  /* position: absolute;
  right: -20px; */
`;

const Fetch = () => {
  const BASEURL =
    'https://synthesizer-api.herokuapp.com/api/synths?key=C6T2MA6-8B54BSG-GZKKV0F-MFKC1S1';
  const INITIALSTATE = {status: 'idle', code: null, message: null};
  const [synths, setSynths] = useState([]);
  const [data, setData] = useState(INITIALSTATE);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`${BASEURL}`);
      setData({
        ...data,
        status: 'done',
        code: result.status,
        message: result.statusText,
      });
      setSynths(result.data.synths);
    }
    fetchData();
  }, []);

  // console.log('synths', synths);
  // console.log('data', data);

  return (
    <Col>
      {synths.map((synth, index) => {
        return <Img key={index}> {<img key={index} src={synth.img} />}</Img>;
      })}
      <br />
    </Col>
  );
};

export default Fetch;
