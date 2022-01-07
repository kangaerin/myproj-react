import Axios from 'axios';
import { useEffect, useState } from 'react';
import DebugStates from 'components/DebugStates';

function PageReviewList() {
  const [reviewList, setReviewList] = useState([]);

  //[]를 빼먹으면 컴포넌트 호출시에 매번 호출됨.
  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    const url = 'http://127.0.0.1:8000/shop/api/reviews/';
    // Promise 객체
    Axios.get(url)
      .then(({ data }) => {
        console.group('정상 응답');
        console.log(data);
        console.groupEnd();
        setReviewList(data);
      })
      .catch((error) => {
        console.group('에러 응답');
        console.log(error);
        console.groupEnd();
      });
  };

  return (
    <div>
      <h2>Review List</h2>

      <button
        onClick={() => refetch()}
        className="bg-yellow-400 hover:bg-red-400"
      >
        새로고침
      </button>
      <hr />
      <DebugStates reviewList={reviewList} />
    </div>
  );
}

export default PageReviewList;
