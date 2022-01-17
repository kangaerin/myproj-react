import useFieldValues from 'hooks/useFieldValues';
import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';

const INIT_FIELD_VALUES = { username: '', password: '' };

function PageLogin() {
  const [{ loading, error }, getToken] = useApiAxios(
    {
      url: 'accounts/api/token/',
      method: 'POST',
    },
    { manual: true },
  );
  const { fieldValues, handleFieldChange } = useFieldValues(INIT_FIELD_VALUES);

  const handleSubmit = (e) => {
    e.preventDefault();

    getToken({ data: fieldValues }).then((response) => {
      console.log(response.data);

      navigator('/');
    });
  };

  return (
    <div>
      <h2 className="mt-10 border border-lime-500 ml-10 w-40 mb-5 text-center">
        Login Form
      </h2>

      {error?.response?.status === 401 && (
        <div className="text-red-400">로그인에 실패했습니다.</div>
      )}

      <div>
        <input
          className="bg-red-200 mb-5 w-60 h-10 text-center"
          name="username"
          value={fieldValues.username}
          onChange={handleFieldChange}
          placeholder="아이디를 입력해주세요."
        />
      </div>
      <div>
        <input
          className="bg-blue-200 mb-5 w-60 h-10 text-center block"
          name="password"
          value={fieldValues.password}
          onChange={handleFieldChange}
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>
      <p className="ml-40 border border-lime-500 w-fit hover:bg-emerald-300 mb-5">
        <button onClick={handleSubmit}>로그인</button>
      </p>
      <DebugStates fieldValues={fieldValues} />
    </div>
  );
}

export default PageLogin;
