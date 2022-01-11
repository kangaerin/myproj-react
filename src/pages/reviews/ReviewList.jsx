import Axios from 'axios';
import { useEffect, useState } from 'react';
import DebugStates from 'components/DebugStates';
import Review from 'components/Review';
import { useNavigate } from 'react-router-dom';
import { API_HOST } from 'Constants';

function PageReviewList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviewList, setReviewList] = useState([]);

  const navigate = useNavigate();

  //[]를 빼먹으면 컴포넌트 호출시에 매번 호출됨.
  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoading(true);
    setError(null);

    const url = 'http://127.0.0.1:8000/shop/api/reviews/';
    // Promise 객체
    Axios.get(url)
      .then(({ data }) => {
        setReviewList(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteReview = (deletingReiew) => {
    const { id: deletingReviewId } = deletingReiew;
    const url = `${API_HOST}}shop/api/reviews/${deletingReviewId}/`;

    setLoading(true);
    setError(null);

    Axios.delete(url)
      .then(() => {
        console.log('삭제성공');
        // 1) 삭제된 항목만 상탯값에서 제거
        setReviewList((prevReviewList) => {
          return prevReviewList.filter((review) => {
            return review.id !== deletingReviewId;
          });

          // 중괄호를 빼고 return 삭제
          // setReviewList((prevReviewList) =>
          //    prevReviewList.filter((review) =>
          //     return review.id !== deletingReviewId;
          //   );
        });

        // 2) 선택시 전체를 새로고침
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Review List</h2>

      {loading && <div>Loading...</div>}
      {error && <div>통신중에 오류가 발생했습니다.</div>}

      <button
        onClick={() => refetch()}
        className="bg-yellow-400 hover:bg-red-400 mr-1"
      >
        새로고침
      </button>

      <button
        onClick={() => {
          navigate('/reviews/new/');
        }}
        className="bg-blue-400 
      hover:bg-slate-400"
      >
        새 리뷰
      </button>

      <div className="">
        {reviewList.map((review) => (
          <Review
            key={review.id}
            review={review}
            handeleEdit={() => navigate(`/reviews/${review.id}/edit/`)}
            handleDelete={() => deleteReview(review)}
          />
        ))}
      </div>

      <hr />
      <DebugStates loading={loading} error={error} reviewList={reviewList} />
    </div>
  );
}

export default PageReviewList;
