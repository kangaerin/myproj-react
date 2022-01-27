import { Link } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';

function TopNav() {
  const [auth, , , logout] = useAuth();

  const handledLogout = () => {
    logout();
  };

  return (
    <div className="my-3">
      <ul className="flex gap-4">
        {!auth.isLoggedIn && (
          <>
            <MyLink to="/accounts/login/">로그인</MyLink>
            <MyLink to="/accounts/signup/">회원가입</MyLink>
          </>
        )}
        {auth.isLoggedIn && (
          <>
            <MyLink to="/accounts/profile/">프로필</MyLink>
            <button
              className="pb-1 text-gray-500 hover:text-red-500 hover:border-red-500 border-b-4"
              onClick={() => handledLogout()}
            >
              로그아웃
            </button>
          </>
        )}

        <MyLink to="/blog/">블로그</MyLink>
        <MyLink to="/news/">뉴스룸</MyLink>
        <MyLink to="/telephone_book/">주소록</MyLink>
      </ul>
    </div>
  );
}

function MyLink({ to, children }) {
  return (
    <Link
      to={to}
      className="pb-1 text-gray-500 hover:text-red-500 hover:border-red-500 border-b-4"
    >
      {children}
    </Link>
  );
}

export default TopNav;
