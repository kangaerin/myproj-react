import BlogList from 'components/blog/BlogList';
import DebugStates from 'components/DebugStates';

function PageBlog() {
  return (
    <div>
      <h2 className="text-red-400 border-b-2 border-red-300">Blog</h2>
      <BlogList />
      <DebugStates />
    </div>
  );
}

export default PageBlog;
