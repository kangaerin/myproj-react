import useFieldValues from 'hooks/useFieldValues';
import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import { useNavigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const INITIAL_AUTH = { isLoggedIn: false };
const INIT_FIELD_VALUES = { username: '', password: '' };

function LoginForm() {
  const navigate = useNavigate();

  const [auth, , login] = useAuth();

  console.log(auth);

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
      const { access, refresh, username, first_name, last_name } =
        response.data;
      // TODO: access/refresh token을 브라우저 어딘가에 저장해야 합니다.
      // 저장해서 페이지 새로고침이 발생하더라도 그 token이 유실되지 않아야 합니다.
      login({
        isLoggedIn: true,
        access,
        refresh,
        username,
        first_name,
        last_name,
      });

      console.log('access :', access);
      console.log('refresh :', refresh);
      console.log('username :', username);
      console.log('first_name :', first_name);
      console.log('last_name :', last_name);

      // 인증 후, 이동할 주소를 지정합니다.
      navigate('/');
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

      <form onSubmit={handleSubmit}>
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
      </form>
      <DebugStates auth={auth} fieldValues={fieldValues} />
    </div>
  );
}

export default LoginForm;
