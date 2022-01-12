import { useApiAxios } from 'api/base';
import Button from 'components/Button';
import LoadingIndicator from 'components/LoadingIndicator';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function BlogPostDetail({ postId }) {
  const navigate = useNavigate();
  const [{ data: post, loading, error }, refetch] = useApiAxios({
    url: `/blog/api/posts/${postId}/`,
  });

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {loading && <LoadingIndicator />}
      {error && `로딩중 에러가 발생했습니다.(${error.response.status}) `}
      {post && (
        <>
          <h3 className="text-2xl my-5">{post.title}</h3>
          <div>
            {post.content.split(/[\r\n]+/).map((line, index) => (
              <p className="my-3" key={index}>
                {line}
              </p>
            ))}
          </div>
        </>
      )}
      <hr />
      <Button onClick={() => navigate('/blog/')}>목록으로</Button>
    </div>
  );
}

export default BlogPostDetail;
