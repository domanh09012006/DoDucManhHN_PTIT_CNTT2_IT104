import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function Posts() {
  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <div>
        {posts.map((post) => (
          <div
            key={post.id}
          >
            <Link
              to={`/blog/posts/${post.id}`}
            >
              {post.title}
            </Link>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
