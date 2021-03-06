import TopNav from 'components/TopNav';
import PageLogin from 'pages/accounts/PageLogin';
import PageProfile from 'pages/accounts/PageProfile';
import PageBlog from 'pages/blog/PageBlog';
import Clock from 'pages/examples/Clock';
import Components from 'pages/examples/Components';
import ContextApiSample from 'pages/examples/ContextApiSample';
import ContextApiSample2 from 'pages/examples/ContextApiSample2';
import CssInJs from 'pages/examples/CssInJs';
import CssMoudle from 'pages/examples/CSSModule';
import useWindowWidth from 'pages/examples/useWindowWidth';
import PageNewsIndex from 'pages/news/PageNewsIndex';
import PageNewsArticleDetial from 'pages/news/PageNewsArticleDetail';
import ReviewForm from 'pages/reviews/ReviewForm';
import ReviewList from 'pages/reviews/ReviewList';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import PageReviewForm from 'pages/reviews/ReviewForm';
import PageNewsArticleForm from 'pages/news/PageNewsAricleForm';
import PageBlogDetail from 'pages/blog/PageBlogDetail';
import BlogForm from 'components/blog/BlogForm';
import PageTelephoneBook from 'pages/telephone_book/PageTelephoneBook';
import PageTelephoneBook_detail from 'pages/telephone_book/PageTelephoneBook_detail';
import PageTelephoneBook_Form from 'pages/telephone_book/PageTelephoneBook_Form';
import PageSignup from 'pages/accounts/PageSignup';

function App() {
  // const windowWidth = useWindowWidth();
  return (
    <>
      <div className="app">
        <TopNav />
        <Routes>
          <Route path="/" element={<Navigate to="/blog/" />} />
          <Route path="/accounts/login/" element={<PageLogin />} />
          <Route path="/accounts/profile/" element={<PageProfile />} />
          <Route path="accounts/signup/" element={<PageSignup />} />
          <Route path="/blog/" element={<PageBlog />} />
          <Route path="/blog/:postId/" element={<PageBlogDetail />} />
          <Route path="/blog/new/" element={<BlogForm />} />
          <Route path="/news/" element={<PageNewsIndex />} />
          <Route path="/news/:articleId/" element={<PageNewsArticleDetial />} />
          <Route path="/news/new/" element={<PageNewsArticleForm />} />
          <Route
            path="/news/:articleId/edit/"
            element={<PageNewsArticleForm />}
          />
          <Route path="/telephone_book/" element={<PageTelephoneBook />} />
          <Route
            path="/telephone_book/:numberId/"
            element={<PageTelephoneBook_detail />}
          />
          <Route
            path="telephone_book/:numberId/edit/"
            element={<PageTelephoneBook_Form />}
          />
          {/* <Route path="/reviews/" element={<ReviewList />} />
          <Route path="/reviews/new/" element={<ReviewForm />} />
          <Route path="/reviews/:reviewId/edit/" element={<ReviewForm />} /> */}
          {/* <Route path="/examples/components/" element={<Components />} />
          <Route path="/examples/css-module/" element={<CssMoudle />} />
          <Route path="/examples/cssinjs/" element={<CssInJs />} />
          <Route path="/examples/context-api/" element={<ContextApiSample />} />
          <Route
            path="/examples/context-api-2/"
            element={<ContextApiSample2 />}
          /> */}
        </Routes>
        {/* <hr /> */}
        {/* ????????? ?????? ??? {windowWidth}px */}
      </div>
      <Routes>
        <Route path="examples/clock/" element={<Clock />} />
      </Routes>
    </>
  );
}

export default App;
