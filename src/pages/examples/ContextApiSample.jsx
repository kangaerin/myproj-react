import { createContext, useContext } from 'react';
import { useState } from 'react/cjs/react.development';

// 인자 : context에서 다룰 값의 디폴트 값
const MessageContext = createContext();

function ContextApiSample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>ContextApiSample</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        1씩 증가 버튼
      </button>
      <MessageContext.Provider value={{ count, setCount }}>
        <Level1 />
      </MessageContext.Provider>
    </div>
  );
}

function Level1() {
  return (
    <div>
      <h2>Level1</h2>
      <Level2 />
    </div>
  );
}

function Level2() {
  return (
    <div>
      <h2>Level2</h2>
      <Level3 />
    </div>
  );
}

// Context를 사용하는 가장 원형

function Level3() {
  return (
    <div>
      <h2>Level3</h2>
      <MessageContext.Consumer>{({ count }) => count}</MessageContext.Consumer>
      <Level4 />
    </div>
  );
}

function Level4() {
  const { count, setCount } = useContext(MessageContext);
  return (
    <div>
      <h2>Level4</h2>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>1씩 증가</button>
    </div>
  );
}

export default ContextApiSample;
