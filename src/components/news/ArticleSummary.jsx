import { Link } from 'react-router-dom';

function ArticleSummeary({ article }) {
  return (
    <div>
      {article.photo && (
        <img
          src={article.photo}
          alt={article.title}
          className="mr-1 rounded w-5 h-5 inline"
        />
      )}
      <Link to={`/news/${article.id}/`}>{article.title}</Link>
    </div>
  );
}

export default ArticleSummeary;
