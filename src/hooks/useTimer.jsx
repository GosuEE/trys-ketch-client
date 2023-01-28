import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setForceSubmit } from '../app/slices/ingameSlice';
import alarm from '../assets/sound/alarm.wav';
import turnOnSound from '../utils/turnOnSound';

let startTime;
let timerID;

// 2초 간격으로 세번
const ALARM_TIME = 6 * 1000;

function useTimer(pathRef, center, circleRadius, strokeWidth, timeLimit, gameState) {
  const [degree, setDegree] = useState(1);
  const dispatch = useDispatch();

  const sound = turnOnSound(alarm);

  let alarmOn;
  let alarmOff;

  function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }

  function describeArc(x, y, radius, startAngle, endAngle) {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    const d = [
      'M',
      start.x,
      start.y,
      'A',
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
      'L',
      end.x,
      end.y,
      'L',
      x,
      y,
    ].join(' ');

    return d;
  }

  function getTimerRadius() {
    timerID = setInterval(() => {
      const nowTime = new Date().getTime();
      setDegree(1 - (nowTime - startTime) / timeLimit);
      if (nowTime - startTime >= timeLimit) {
        setDegree(0);
        clearInterval(timerID);
        dispatch(setForceSubmit(true));
      }
    }, 50);
  }

  function alarmSoundOn() {
    alarmOn = setTimeout(() => {
      sound.play();
    }, timeLimit - ALARM_TIME);
  }

  function alarmSoundOff() {
    alarmOff = setTimeout(() => {
      sound.stop();
    }, timeLimit);
  }

  useEffect(() => {
    pathRef.current.setAttribute(
      'd',
      describeArc(
        center - strokeWidth,
        center - strokeWidth,
        circleRadius - strokeWidth * 2,
        0,
        360 * degree,
      ),
    );
  }, [degree]);

  useEffect(() => {
    startTime = new Date().getTime();
    getTimerRadius();
    return () => {
      clearInterval(timerID);
    };
  }, [gameState]);

  useEffect(() => {
    alarmSoundOn();
    alarmSoundOff();
    return () => {
      clearTimeout(alarmOn);
      clearTimeout(alarmOff);
    };
  }, [gameState]);
}

export default useTimer;
