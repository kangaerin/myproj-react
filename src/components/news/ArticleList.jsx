import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import { useAuth } from 'contexts/AuthContext';
import { useEffect } from 'react';
import ArticleSummary from './ArticleSummary';

function ArticleList() {
  const [auth] = useAuth();

  const [{ data: articleList, loading, error }, refetch] = useApiAxios(
    {
      url: '/news/api/articles/',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.access}`,
      },
    },
    { manual: true },
  );

  useEffect(() => {
    // if (auth.isLoggedIn) {}
    // 방법 1)
    // refetch({
    //   headers: {
    //     Authorization: `Bearer ${auth.access}`,
    //   },
    // });
    refetch();
  }, [auth]);

  return (
    <div className="my-5">
      {loading && '로딩 중 ...'}
      {error && '로딩 중 에러가 발생했습니다.'}
      {articleList && (
        <div className="flex flex-wrap">
          {articleList.map((article) => (
            // duration-300 => 0.3초
            <div
              key={article.id}
              className="w-full md:w-1/2 xl:w-1/3 px-4 
              transition-transform hover:-translate-y-5 duration-300"
            >
              <ArticleSummary article={article} />
            </div>
          ))}
        </div>
      )}
      <DebugStates articleList={articleList} loading={loading} error={error} />
    </div>
  );
}

export default ArticleList;
