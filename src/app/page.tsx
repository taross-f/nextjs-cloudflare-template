export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Hello, World!!</h1>
      <p className="text-lg mb-6">
        Welcome to my Next.js application deployed on Cloudflare
      </p>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <p className="text-gray-700">This application includes:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Next.js frontend</li>
          <li>API routes</li>
          <li>Cloudflare deployment</li>
          <li>GitHub Actions CI/CD</li>
        </ul>
      </div>
      <div className="mt-8">
        <a
          href="/api/hello"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Test API Route
        </a>
      </div>
    </div>
  );
}
