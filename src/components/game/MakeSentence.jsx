import React from 'react';
import styled from 'styled-components';
import Input from '../common/Input';
import Button from '../common/Button';

function MakeSentence() {
  return (
    <div>
      <p style={{ position: 'absolute', left: '5%', top: '5%', fontSize: '35px' }}>1/1</p>
      <div
        style={{
          padding: '13px 0',
          position: 'absolute',
          top: '5%',
          right: '5%',
          width: '50px',
          height: '50px',
          border: '2px solid black',
          borderRadius: '50%',
        }}
      >
        <p
          style={{
            textAlign: 'center',
          }}
        >
          timer
        </p>
      </div>
      <Image>
        <Text>대충 이거 로고임</Text>
      </Image>
      <Image style={{ marginTop: '5%' }}>
        <Text>대충 이거 이미지임</Text>
      </Image>
      <div style={{ fontSize: '28px', textAlign: 'center', marginTop: '5%' }}>문장 쓰기</div>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '20px',
          transform: 'translate(-50%, 0)',
          width: '70%',
        }}
      >
        <Input type="text" width="80%" />
        <Button style={{ marginLeft: '15px' }}>완료</Button>
      </div>
    </div>
  );
}

const Text = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Image = styled.div`
  position: relative;
  margin: 0 auto;
  width: 150px;
  height: 150px;
  border: 2px solid black;
  border-radius: 50%;
`;

export default MakeSentence;