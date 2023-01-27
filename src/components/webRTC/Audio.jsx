import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

function Audio({ stream, socketID }) {
  const ref = useRef(null);
  const user = useSelector((state) => state.mute.users).filter(
    (v) => v.socketID === socketID && v,
  )[0];
  const isMuted = user?.isMuted;

  useEffect(() => {
    if (ref.current) ref.current.srcObject = stream;
  }, [stream]);

  return (
    <audio ref={ref} muted={isMuted} autoPlay>
      <track kind="captions" />
    </audio>
  );
}

export default Audio;
