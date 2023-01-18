import React from 'react';
import quit from '../../assets/icons/quit-icon.svg';
import IconButton from '../common/IconButton';
import useModal from '../../hooks/useModal';

function QuitButton({ size }) {
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal('quitRoom');
  };

  return <IconButton size={size} icon={quit} text="방나가기" onClick={handleOpenModal} />;
}

export default QuitButton;
