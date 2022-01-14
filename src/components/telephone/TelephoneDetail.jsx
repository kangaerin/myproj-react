import { useApiAxios } from 'api/base';
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import LoadingIndicator from 'components/LoadingIndicator';

function TelephoneDetail({ numberId }) {
  const [{ data: number, loading, error }, refetch] = useApiAxios(
    `/telephone_book/api/number/${numberId}`,
  );

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <h3>
        {/* {JSON.stringify(number)} */}
        {loading && <LoadingIndicator />}
        {number && (
          <>
            <div>이름 : {number.name}</div>

            <div>번호 : {number.Phone_number}</div>
            <div>메모 : {number.memo}</div>
            <div>
              {number.photo && (
                <img src={number.photo} alt={'등록된 사진이 없습니다.'} />
              )}
            </div>
          </>
        )}
      </h3>

      <hr />
      <Link to="/telephone_book/" className="hover:text-red-500">
        목록으로
      </Link>
    </div>
  );
}

export default TelephoneDetail;
