import axios from "axios";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  image: string;
  content: string;
  date: string;
  status: string;
};

export default function ManagerPost() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [search, setSearch] = useState("");
  const [confirmAction, setConfirmAction] = useState<{
    type: "block" | "delete" | "reset" | null;
    post?: Post;
  }>({ type: null });

  const [newPost, setNewPost] = useState<Omit<Post, "id">>({
    title: "",
    image: "",
    content: "",
    date: new Date().toLocaleDateString("vi-VN"),
    status: "Chan",
  });

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:3000/post");
    const converted = res.data.map((p: any) => ({
      id: parseInt(p.id),
      title: p.name,
      image: p.url,
      content: "",
      date: p.date,
      status: p.status ? "Da xuat ban" : "Chan",
    }));
    setPosts(converted);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const validatePost = (post: Omit<Post, "id">, id?: number) => {
    if (!post.title || !post.image || !post.content) {
      alert("Tên bài viết, hình ảnh và nội dung không được để trống");
      return false;
    }
    const isDuplicate = posts.some(
      (p) => p.title === post.title && p.id !== id
    );
    if (isDuplicate) {
      alert("Tên bài viết đã tồn tại");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    const dataToSend = {
      name: newPost.title,
      url: newPost.image,
      date: newPost.date,
      status: newPost.status === "Da xuat ban",
    };

    if (editingPost) {
      if (!validatePost(newPost, editingPost.id)) return;
      await axios.patch(
        `http://localhost:3000/post/${editingPost.id}`,
        dataToSend
      );
    } else {
      if (!validatePost(newPost)) return;
      await axios.post("http://localhost:3000/post", dataToSend);
    }

    setShowForm(false);
    setEditingPost(null);
    setNewPost({
      title: "",
      image: "",
      content: "",
      date: new Date().toLocaleDateString("vi-VN"),
      status: "Chan",
    });
    fetchPosts();
  };

  const handleBlockConfirm = async () => {
    if (!confirmAction.post) return;
    const newStatus =
      confirmAction.post.status === "Da xuat ban" ? false : true;
    await axios.patch(`http://localhost:3000/post/${confirmAction.post.id}`, {
      status: newStatus,
    });
    setConfirmAction({ type: null });
    fetchPosts();
  };

  const handleDeleteConfirm = async () => {
    if (!confirmAction.post) return;
    await axios.delete(`http://localhost:3000/post/${confirmAction.post.id}`);
    setConfirmAction({ type: null });
    fetchPosts();
  };

  const handleSearch = async () => {
    if (!search) {
      fetchPosts();
    } else {
      const res = await axios.get(
        `http://localhost:3000/post?name_like=${search}`
      );
      const converted = res.data.map((p: any) => ({
        id: parseInt(p.id),
        title: p.name,
        image: p.url,
        content: "",
        date: p.date,
        status: p.status ? "Da xuat ban" : "Chan",
      }));
      setPosts(converted);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      {/* Tìm kiếm và thêm mới */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", gap: 8 }}>
          <input
            style={{ padding: 6 }}
            type="search"
            placeholder="Nhập từ khóa tìm kiếm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            style={{
              backgroundColor: "#4fa1f2",
              color: "white",
              padding: "6px 12px",
              border: "none",
              borderRadius: 4,
            }}
          >
            Tìm
          </button>
        </div>
        <button
          onClick={() => {
            setShowForm(true);
            setEditingPost(null);
          }}
          style={{
            backgroundColor: "#0b74de",
            color: "white",
            padding: "8px 16px",
            borderRadius: 4,
          }}
        >
          Thêm mới bài viết
        </button>
      </div>

      {/* Bảng hiển thị bài viết */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: 8 }}>STT</th>
            <th style={{ border: "1px solid #ccc", padding: 8 }}>Tiêu đề</th>
            <th style={{ border: "1px solid #ccc", padding: 8 }}>Hình ảnh</th>
            <th style={{ border: "1px solid #ccc", padding: 8 }}>Ngày viết</th>
            <th style={{ border: "1px solid #ccc", padding: 8 }}>Trạng thái</th>
            <th style={{ border: "1px solid #ccc", padding: 8 }}>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {posts.length === 0 ? (
            <tr>
              <td colSpan={6} style={{ textAlign: "center", padding: 16 }}>
                Không có kết quả
              </td>
            </tr>
          ) : (
            posts.map((post, index) => (
              <tr key={post.id}>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: 8,
                    textAlign: "center",
                  }}
                >
                  {index + 1}
                </td>
                <td style={{ border: "1px solid #ccc", padding: 8 }}>
                  {post.title}
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: 8,
                    textAlign: "center",
                  }}
                >
                  <img
                    src={post.image}
                    alt=""
                    style={{
                      width: 50,
                      height: 50,
                      objectFit: "cover",
                      borderRadius: 4,
                    }}
                  />
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: 8,
                    textAlign: "center",
                  }}
                >
                  {post.date}
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: 8,
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      padding: "4px 8px",
                      borderRadius: 4,
                      backgroundColor:
                        post.status === "Da xuat ban" ? "#c7f5d9" : "#fff4c2",
                      color:
                        post.status === "Da xuat ban" ? "#027a48" : "#b54708",
                      fontWeight: 500,
                    }}
                  >
                    {post.status}
                  </span>
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: 8,
                    textAlign: "center",
                  }}
                >
                  <button
                    style={{ marginRight: 4 }}
                    onClick={() => setConfirmAction({ type: "block", post })}
                  >
                    {post.status === "Da xuat ban" ? "Chặn" : "Xuất bản"}
                  </button>
                  <button
                    style={{ marginRight: 4 }}
                    onClick={() => {
                      setShowForm(true);
                      setEditingPost(post);
                      setNewPost({
                        title: post.title,
                        image: post.image,
                        content: "",
                        date: post.date,
                        status: post.status,
                      });
                    }}
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => setConfirmAction({ type: "delete", post })}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Form thêm/sửa */}
      {showForm && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: 20,
              borderRadius: 8,
              width: 400,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <h3 style={{ margin: 0 }}>
                {editingPost ? "Cập nhật bài viết" : "Thêm mới bài viết"}
              </h3>
              <button onClick={() => setShowForm(false)}>✖</button>
            </div>

            <label>Tên bài viết</label>
            <input
              style={{
                width: "100%",
                padding: 8,
                marginBottom: 12,
                border: "1px solid #ccc",
                borderRadius: 4,
              }}
              type="text"
              value={newPost.title}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.target.value })
              }
            />

            <label>Hình ảnh</label>
            <input
              style={{
                width: "100%",
                padding: 8,
                marginBottom: 12,
                border: "1px solid #ccc",
                borderRadius: 4,
              }}
              type="text"
              value={newPost.image}
              onChange={(e) =>
                setNewPost({ ...newPost, image: e.target.value })
              }
            />

            <label>Nội dung</label>
            <textarea
              style={{
                width: "100%",
                padding: 8,
                marginBottom: 12,
                border: "1px solid #ccc",
                borderRadius: 4,
              }}
              rows={4}
              value={newPost.content}
              onChange={(e) =>
                setNewPost({ ...newPost, content: e.target.value })
              }
            />

            <div
              style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}
            >
              <button
                onClick={() => setConfirmAction({ type: "reset" })}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#aaa",
                  color: "white",
                  borderRadius: 4,
                }}
              >
                Làm mới
              </button>
              <button
                onClick={handleSubmit}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#0b74de",
                  color: "white",
                  borderRadius: 4,
                }}
              >
                {editingPost ? "Cập nhật" : "Xuất bản"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hộp thoại xác nhận */}
      {confirmAction.type && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: 24,
              borderRadius: 8,
              width: 400,
            }}
          >
            <h3 style={{ marginBottom: 16 }}>Xác nhận</h3>
            <p style={{ marginBottom: 24 }}>
              {confirmAction.type === "block" &&
                `Bạn có chắc muốn ${
                  confirmAction.post?.status === "Da xuat ban"
                    ? "chặn"
                    : "xuất bản"
                } bài viết "${confirmAction.post?.title}"?`}
              {confirmAction.type === "delete" &&
                `Bạn có chắc muốn xóa bài viết "${confirmAction.post?.title}"?`}
              {confirmAction.type === "reset" &&
                "Bạn có chắc muốn làm mới toàn bộ nội dung đã nhập?"}
            </p>
            <div
              style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}
            >
              <button
                onClick={() => setConfirmAction({ type: null })}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#aaa",
                  color: "white",
                  borderRadius: 4,
                }}
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  if (confirmAction.type === "block") handleBlockConfirm();
                  if (confirmAction.type === "delete") handleDeleteConfirm();
                  if (confirmAction.type === "reset") {
                    setNewPost({
                      title: "",
                      image: "",
                      content: "",
                      date: new Date().toLocaleDateString("vi-VN"),
                      status: "Chan",
                    });
                    setConfirmAction({ type: null });
                  }
                }}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#e53935",
                  color: "white",
                  borderRadius: 4,
                }}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
