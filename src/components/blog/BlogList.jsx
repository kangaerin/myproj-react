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
    <div className="border border-blue-200 my-1 p-1">
      <h2 className="bg-green-100">포스팅 목록</h2>
      <div className="bg-yellow-100 my-2">
        {blogdata &&
          blogdata.map((post, index) => (
            <BlogPostTitle post={post} key={index} />
          ))}
        {blogloading && '포스팅 목록을 가져오는 중입니다.'}
        {error && '목록을 가져오는 중 에러가 발생했습니다.'}
        {BlogList.content}
      </div>
    </div>
  );
}

export default BlogList;
