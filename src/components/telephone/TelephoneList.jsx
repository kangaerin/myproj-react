import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import TelephoneName from './TelephoneName';

function TelephoneList() {
  const [{ data: number_list, loading, error }] = useApiAxios(
    '/telephone_book/api/number/',
  );
  return (
    <div>
      <h2 className="w-60 bg-red-200 hover:bg-red-400 border border-lime-200">
        전화번호부 목록입니다.
      </h2>
      {/* {JSON.stringify(number_list)} */}
      {number_list && (
        <div>
          {number_list.map((number) => (
            <div>
              <TelephoneName number={number} />
            </div>
          ))}
        </div>
      )}
      <DebugStates />
    </div>
  );
}

export default TelephoneList;
