import { useEffect, useState } from 'react';
import './Clock.css';

const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRD', 'SAT'];

// setInterval은 자바스크립트 내에 있는 함수. 끌 때까진 꺼지지 않음.
function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(
    //이 함수는 현 컴포넌트가 mount 시에 호출됩니다.
    () => {
      const interval = setInterval(() => {
        setDate(new Date());
      }, 1000);
      // 리턴된 함수는 현 컴포넌트 unmount 시에 호출됩니다.
      // 다른 컴포넌트로 갔을 때 멈춤.
      return () => {
        clearInterval(interval);
      };
    },
    [],
  );
  return (
    <div className="clock-wrapper">
      <h2>시계</h2>

      <div class="clock">
        <p class="year" style={{ fontSize: '30px' }}>
          {date.getFullYear()} - {date.getMonth() + 1} - {date.getDate()}
          {', '}
          {WEEKDAYS[date.getDay()]}
        </p>
        {/* <p class="date">{}</p> */}
        <p class="time">
          {' '}
          {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
        </p>
        <p class="text" style={{ fontSize: '15px' }}>
          Powered by React.js
        </p>
      </div>
    </div>
  );
}

export default Clock;
