import useAxios from 'axios-hooks';
import DebugStates from 'components/DebugStates';
import ArticleSummeary from './ArticleSummary';

function ArticleList() {
  const [{ data: articleList, loading, error }, refetch] = useAxios(
    'http://127.0.0.1:8000/news/api/articles/',
  );

  return (
    <div>
      <h3>뉴스 기사 목록을 보여줄 것입니다.</h3>
      {loading && '로딩 중...'}
      {error && '로딩 중 에러가 발생했습니다.'}
      {articleList &&
        articleList.map((article) => <ArticleSummeary article={article} />)}
      <DebugStates articleList={articleList} loading={loading} error={error} />
    </div>
  );
}

export default ArticleList;
