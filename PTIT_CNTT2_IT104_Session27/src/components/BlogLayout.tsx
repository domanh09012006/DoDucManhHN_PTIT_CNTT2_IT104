import { Link, Outlet } from "react-router-dom";

export default function BlogLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gradient-to-b from-indigo-600 to-blue-600 text-white p-4 relative">
        <h1 className="text-2xl font-bold mb-6">My Blog</h1>
        <nav>
          <ul>
            <li>
              <Link
                to="/blog/posts"
                className="block bg-indigo-500 hover:bg-indigo-700 p-2 rounded"
              >
                Posts
              </Link>
            </li>
          </ul>
        </nav>
        <footer className="absolute bottom-4 left-4 text-xs text-white">
          &copy; 2025 My Blog
        </footer>
      </aside>
      <main className="flex-1 bg-gray-50 p-8">
        <Outlet />
      </main>
    </div>
  );
}
