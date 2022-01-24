import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import { useAuth } from 'contexts/AuthContext';
import useFieldValues from 'hooks/useFieldValues';
import { useNavigate } from 'react-router-dom';

const INIT_FILED_VALUES = { username: '', password: '', password1: '' };

function SignupForm() {
  const { fieldValues, handleFieldChange } = useFieldValues(INIT_FILED_VALUES);
  const [auth, _, login] = useAuth();
  const navigate = useNavigate();

  const [{ loading, error, errorMessages }, signup] = useApiAxios(
    {
      url: 'accounts/api/signup/',
      method: 'POST',
    },
    { manual: true },
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    signup({ data: fieldValues }).then((response) => {
      const { username, password, password1 } = response.data;
      login({
        username,
        password,
        password1,
      });
      console.log('가입이 완료되었습니다.');
      navigate('/accounts/login/');
    });
  };

  return (
    <div>
      {error &&
        `가입에 실패하였습니다. (${error.response?.status} ${error.response?.statusText})`}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="mt-5 bg-red-200 w-80 h-10 text-center"
            name="username"
            value={fieldValues.username}
            onChange={handleFieldChange}
            placeholder="가입할 아이디를 입력해주세요."
          />
          {errorMessages.username?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div>
          <input
            className="mt-5 bg-blue-200 w-80 h-10 text-center"
            name="password"
            value={fieldValues.password}
            onChange={handleFieldChange}
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          {errorMessages.password?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div>
          <input
            className="mt-5 mb-5 bg-blue-200 w-80 h-10 text-center"
            name="password1"
            value={fieldValues.password1}
            onChange={handleFieldChange}
            type="password"
            placeholder="비밀번호를 한 번 더 입력해주세요."
          />
          {errorMessages.non_field_errors?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <button
          className="ml-80 border border-lime-500 w-fit hover:bg-emerald-300 mb-5"
          onClick={handleSubmit}
        >
          회원가입
        </button>
      </form>
      <DebugStates fieldValues={fieldValues} />
    </div>
  );
}

export default SignupForm;
