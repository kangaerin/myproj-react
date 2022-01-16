import { useApiAxios } from 'api/base';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import LoadingIndicator from 'components/LoadingIndicator';

function TelephoneDetail({ numberId }) {
  const navigate = useNavigate();
  const [{ data: number, loading, error }, refetch] = useApiAxios(
    `/telephone_book/api/number/${numberId}`,
  );

  useEffect(() => {
    refetch();
  }, []);

  const handleDelete = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      deleteNumber().then(() => navigate('/telephone_book/'));
    }
  };

  const [{ loading: deleteLoading, error: deleteError }, deleteNumber] =
    useApiAxios(
      {
        url: `/telephone_book/api/number/${numberId}/`,

        method: 'DELETE',
      },
      { manual: true },
    );

  return (
    <div>
      <h3 className="border-2 rounded-lg">
        {/* {JSON.stringify(number)} */}
        {loading && <LoadingIndicator />}
        {number && (
          <>
            <div>
              <ul className="w-15 h-15 rounded border-4 border-gray-700">
                {number.photo && (
                  <img src={number.photo} alt={'등록된 사진이 없습니다.'} />
                )}
              </ul>
            </div>
            <hr />
            <div className="text-center">이름 : {number.name}</div>
            <div className="text-center">번호 : {number.Phone_number}</div>
            <div className="text-center">메모 : {number.memo}</div>
          </>
        )}
      </h3>

      <hr />
      <div className="flex gap-5">
        <Link to="/telephone_book/" className="hover:text-red-500">
          목록으로
        </Link>
        <Link
          to={`/telephone_book/${numberId}/edit/`}
          className="hover:text-blue-300"
        >
          수정하기
        </Link>

        <button
          disabled={deleteLoading}
          onClick={handleDelete}
          className="hover:text-red-400"
        >
          삭제하기
        </button>
      </div>
    </div>
  );
}

export default TelephoneDetail;
