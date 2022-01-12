import useAxios from 'axios-hooks';
import { Link } from 'react-router-dom';

function ArticleDetail({ articleId }) {
  const [{ data: article, loading, error }] = useAxios(
    `http://127.0.0.1:8000/news/api/articles/${articleId}/`,
  );
  // TODO: 데이터 통신
  return (
    <div>
      {loading && '로딩중...'}
      {error && '에러가 발생했습니다.'}
      {article && (
        <>
          <h3>{article.title}</h3>
          <div>
            {article.content.split(/[\r\n]+/).map((line, index) => (
              <p className="my-3" key={index}>
                {line}
              </p>
            ))}
          </div>
        </>
      )}
      <hr className="my-3" />
      <div className="flex gap-4 mt-3 mv-10">
        <Link to="/news/" className="hover:text-red-400">
          목록으로
        </Link>
        <Link to={`/news/{$articleId}/edit/`}>수정하기</Link>
      </div>
    </div>
  );
}

export default ArticleDetail;
