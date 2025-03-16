import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] bg-background  text-center px-6">
      <h1 className="text-8xl font-bold text-errorText animate-pulse">404</h1>
      <h2 className="text-2xl font-semibold text-errorText mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-errorSubtitle mt-2">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link to="/" className="mt-6">
        <button className="px-6 py-3 bg-buttonBg text-buttonText rounded-lg transition duration-300 shadow-md">
          Go Home
        </button>
      </Link>
    </div>
  );
}
