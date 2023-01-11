import React from 'react';
import styled from 'styled-components';
import Drawing from '../components/game/Drawing';
// import Guessing from '../components/game/Guessing';
import MakeSentence from '../components/game/MakeSentence';

function InGame() {
  return (
    <Wrapper>
      <MakeSentence />
      {/* <div>
        <h3 style={{ textAlign: 'center', fontSize: '42px' }}>제시어</h3>
        <Drawing />
      </div> */}
      {/* <Guessing /> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 65%;
  height: 80%;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid black;
  border-radius: 16px;
`;

export default InGame;
