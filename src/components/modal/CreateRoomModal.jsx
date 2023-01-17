import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../common/TextInput';
import roomAPI from '../../api/room';
import Modal from '../common/Modal';

function CreateRoomModal() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCreate = () => {
    const trimedTitle = title.trim();
    if (trimedTitle === '') {
      alert('방 제목을 입력해주세요');
    } else {
      roomAPI
        .createRoom(trimedTitle)
        .then((res) => {
          navigate(`/room/${res.data.data.roomId}`);
          alert('방 생성 완료!');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Modal title="방 만들기" btnText="만들기" onConfirm={handleCreate}>
      <TextInput
        maxlength="15"
        placeholder="방 이름을 입력해주세요"
        value={title}
        onChange={handleChange}
      />
    </Modal>
  );
}

export default CreateRoomModal;
