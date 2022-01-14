import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import TelephoneName from './TelephoneName';

function TelephoneList() {
  const [{ data: number_list, loading, error }] = useApiAxios(
    '/telephone_book/api/number/',
  );
  return (
    <div>
      <div>
        <h2 className="place-content-center mb-5 text-center cursor-default border border-gray-200 border-4 rounded-lg">
          전화번호부 목록
        </h2>
      </div>
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
