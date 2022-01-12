import { Link } from 'react-router-dom';

function BlogPostTitle({ post }) {
  return (
    <div>
      제목 :<Link to={`/blog/${post.id}/`}>{post.title}</Link>
    </div>
  );
}

export default BlogPostTitle;
