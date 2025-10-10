import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div>
      <section className="container not-found-page-section my-5">
        <h1 className="my-4">{":(4O4:page not found."}</h1>
        <p>
          oops! The page you're looking for eas not found or has been removed.
        </p>
        <p className="mb-4">Go back to home</p>
        <div className="main-btn">
          <Link to="/">Home</Link>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
