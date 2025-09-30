import { useState } from "react";

export default function UploadMultiImages() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const uploadedUrls: string[] = [];

    for (const file of Array.from(files)) {
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
        uploadedUrls.push(data.secure_url);
      } catch (error) {
        console.error("Upload error:", error);
      }
    }
    setImageUrls(uploadedUrls);
  };

  return (
    <div className="p-4">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleUpload}
        className="mb-3"
      />

      {imageUrls.length > 0 && (
        <div>
          <p>Ảnh đã upload:</p>
          <div className="grid grid-cols-3 gap-4 mt-2">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`uploaded-${index}`}
                className="w-40 h-40 object-cover rounded-md shadow"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
