import BlogList from 'components/blog/BlogList';
import Button from 'components/Button';
import DebugStates from 'components/DebugStates';
import { useNavigate } from 'react-router-dom';

function PageBlog() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-blue-200 border-b-2 border-blue-300">Blog</h2>
      <BlogList />

      <Button onClick={() => navigate('/blog/new/')}>새 포스팅 </Button>
      <DebugStates />
    </div>
  );
}

export default PageBlog;
