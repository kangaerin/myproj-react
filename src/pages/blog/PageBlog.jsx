import BlogList from './BlogList';

function PageBlog() {
  return (
    <div>
      <h2 className="text-red-400 border-b-2 border-red-300">Blog</h2>
      <BlogList />
      <h3>제목 : </h3>
      <input type={Text} /> <button>저장</button>
      <h3>내용</h3>
      <textarea style={{ backgroundcolor: 'gray' }} />
    </div>
  );
}

export default PageBlog;
