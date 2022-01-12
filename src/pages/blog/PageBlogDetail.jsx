import BlogPostDetail from 'components/blog/BlogPostDetail';
import { useParams } from 'react-router-dom';

function PageBlogDetail() {
  const { postId } = useParams();

  return (
    <div>
      <h2>블로그 내용#{postId} 보여주기</h2>
      <BlogPostDetail postId={postId} />
    </div>
  );
}

export default PageBlogDetail;
