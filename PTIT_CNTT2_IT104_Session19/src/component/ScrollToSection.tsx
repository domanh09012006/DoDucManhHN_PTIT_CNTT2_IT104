import React, { useRef } from "react";

function ScrollToSection() {
  const sectionRef = useRef(null);
  const handleScroll = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <h1>Cuộn tới nội dung</h1>
      <button onClick={handleScroll}>Di toi content</button>
      <p>Đây là nội dung giả lập để tạo khoảng cách cho trang...</p>
      <p>Bạn có thể thêm nhiều đoạn như thế này để tăng chiều dài.</p>
      <p>Thêm đoạn văn để cuộn thử...</p>
      <p>Thêm đoạn văn để cuộn thử...</p>
      <p>Thêm đoạn văn để cuộn thử...</p>
      <div ref={sectionRef}>
        <h2>Content main</h2>
        <p>Nhan nut cuon trang</p>
      </div>
    </div>
  );
}
export default ScrollToSection;
