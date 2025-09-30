import { useState } from "react";

export default function UploadImage() {
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "upload-img");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dx3nfbk9u/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      console.log("Upload success:", data);
      setImageUrl(data.secure_url);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="p-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="mb-3"
      />

      {imageUrl && (
        <div>
          <p>Ảnh đã upload:</p>
          <img src={imageUrl} alt="Uploaded" className="w-64 rounded-md" />
        </div>
      )}
    </div>
  );
}
