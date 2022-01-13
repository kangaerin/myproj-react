import { useApiAxios } from 'api/base';
import BlogPostDetail from 'components/blog/BlogPostDetail';
import { useParams } from 'react-router-dom';

function PageBlogDetail() {
  const { postId } = useParams();

  return (
    <div className="border border-lime-400">
      <h2>블로그 내용#{postId} 보여주기</h2>
      <div>
        <BlogPostDetail postId={postId} />
      </div>
    </div>
  );
}

export default PageBlogDetail;
