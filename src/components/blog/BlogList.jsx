import { useApiAxios } from 'api/base';
import { useEffect } from 'react';
import BlogPostTitle from './BlogPostTitle';

function BlogList() {
  const [{ data: blogdata, loading: blogloading, error }, refetch] =
    useApiAxios('blog/api/posts/');

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <h2>포스팅 목록</h2>
      {blogdata &&
        blogdata.map((post, index) => (
          <BlogPostTitle post={post} key={index} />
        ))}
      {blogloading && '포스팅 목록을 가져오는 중입니다.'}
      {error && '목록을 가져오는 중 에러가 발생했습니다.'}
      {BlogList.content}
    </div>
  );
}

export default BlogList;
