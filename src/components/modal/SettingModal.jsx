import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';
import Switch from '../common/Switch';
import Range from '../common/Range';
import useModal from '../../hooks/useModal';
import speaker from '../../assets/icons/speaker-icon.svg';
// import speakerMute from '../../assets/icons/speaker-mute-icon.svg';
import mike from '../../assets/icons/mike-icon.svg';
// import mikeMute from '../../assets/icons/mike-mute-icon.svg';

function SettingModal() {
  const { closeModal } = useModal();
  // const { musicVolume, setMusicVolume } = useState();
  // const { mikeVolume, setMikeVolume } = useState();

  const handleEnter = () => {
    alert(`설정:`);
    closeModal();
  };

  return (
    <Modal title="설정" btnText="완료" onConfirm={handleEnter}>
      <Row>
        <Typography>배경음악</Typography>
        <Switch />
      </Row>
      <Row>
        <img src={speaker} alt="speaker" />
        <Range width="85%" />
      </Row>
      <Row>
        <img src={mike} alt="mike" />
        <Range width="85%" />
      </Row>
    </Modal>
  );
}

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Typography = styled.h3`
  font-family: 'TTTogether';
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.DIM_GRAY};
`;

export default SettingModal;