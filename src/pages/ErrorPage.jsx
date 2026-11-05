import { useRouteError, Link } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4 text-center">
      <h1 className="text-8xl font-extrabold text-green-600">404</h1>

      <h2 className="mt-4 text-3xl font-bold text-gray-400">Page Not Found</h2>

      <p className="mt-3 max-w-md text-gray-500">
        Sorry, the page you're looking for doesn't exist or may have been moved.
      </p>

      {error?.status && (
        <p className="mt-2 text-sm text-gray-400">
          Error {error.status}: {error.statusText || error.message}
        </p>
      )}

      <Link
        to="/"
        className="mt-8 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default ErrorPage
