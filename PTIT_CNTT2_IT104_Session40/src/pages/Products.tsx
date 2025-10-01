import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Form,
  Image,
  Input,
  Modal,
  Pagination,
  Select,
  Table,
  Upload,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { v4 as uuidv4 } from "uuid";
import productApi, { type Product } from "../api/productApi";
import axios from "axios";
import { UploadOutlined } from "@ant-design/icons";

type ProductStatus = "active" | "inactive";

export default function Products() {
  const [rows, setRows] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<ProductStatus | "">("");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form] = Form.useForm();

  const CLOUD_NAME = "dx3nfbk9u"; // 👈 Cloud name của bạn
  const UPLOAD_PRESET = "upload-img"; // 👈 Upload preset đã tạo

  const fetchProducts = async () => {
    try {
      const res = await productApi.getAll();
      setRows(res.data);
    } catch (err) {
      console.error("Lỗi tải sản phẩm", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filtered = useMemo(() => {
    return rows
      .filter((r) =>
        search
          ? (r.name + r.code).toLowerCase().includes(search.toLowerCase())
          : true
      )
      .filter((r) => (statusFilter ? r.status === statusFilter : true));
  }, [rows, search, statusFilter]);

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const columns: ColumnsType<Product> = [
    { title: "Mã", dataIndex: "code", key: "code", width: 120 },
    { title: "Tên", dataIndex: "name", key: "name" },
    { title: "Danh mục", dataIndex: "category", key: "category", width: 160 },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      width: 140,
      render: (v: number) => v.toLocaleString() + " đ",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      width: 120,
      render: (src: string) => (src ? <Image src={src} width={56} /> : "-"),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (s: string) => (s === "active" ? "Hoạt động" : "Ngừng"),
    },
    {
      title: "Thao tác",
      key: "actions",
      width: 160,
      render: (_, record) => (
        <div className="flex gap-2">
          <Button size="small" type="primary" onClick={() => onEdit(record)}>
            Sửa
          </Button>
          <Button size="small" danger onClick={() => onDelete(record.id)}>
            Xóa
          </Button>
        </div>
      ),
    },
  ];

  function onAdd() {
    setEditing(null);
    form.resetFields();
    setOpen(true);
  }

  function onEdit(row: Product) {
    setEditing(row);
    form.setFieldsValue(row);
    setOpen(true);
  }

  async function onDelete(id: string) {
    await productApi.delete(id);
    fetchProducts();
  }

  interface ProductFormValues {
    code: string;
    name: string;
    category: string;
    price: number | string;
    image?: string;
    status: ProductStatus;
  }

  async function uploadImage(file: File): Promise<string> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
      formData
    );

    return res.data.secure_url; // 👈 link ảnh sau khi upload
  }

  async function onSubmit(values: ProductFormValues) {
    const next: Product = {
      id: editing?.id ?? uuidv4(),
      code: values.code,
      name: values.name,
      category: values.category,
      price: Number(values.price) || 0,
      image: values.image || "",
      status: values.status,
    };

    if (editing) {
      await productApi.update(editing.id, next);
    } else {
      await productApi.add(next);
    }

    setOpen(false);
    fetchProducts();
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Quản lý sản phẩm</div>
        <Button type="primary" onClick={onAdd}>
          Thêm mới
        </Button>
      </div>

      <div className="flex justify-end gap-3">
        <Select
          placeholder="Trạng thái"
          className="min-w-40"
          allowClear
          value={statusFilter || undefined}
          onChange={(v) => setStatusFilter((v as ProductStatus) || "")}
          options={[
            { value: "active", label: "Hoạt động" },
            { value: "inactive", label: "Ngừng hoạt động" },
          ]}
        />
        <Input
          style={{ width: "300px" }}
          placeholder="Tìm kiếm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Table
        columns={columns}
        dataSource={paged}
        pagination={false}
        rowKey="id"
      />

      <div className="flex justify-end">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={filtered.length}
          onChange={setPage}
        />
      </div>

      <Modal
        title={editing ? "Sửa sản phẩm" : "Thêm mới sản phẩm"}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        destroyOnClose
      >
        <Form
          layout="vertical"
          onFinish={onSubmit}
          form={form}
          initialValues={editing ?? { status: "active" }}
        >
          <Form.Item
            name="code"
            label="Mã"
            rules={[{ required: true, message: "Nhập mã" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Tên"
            rules={[{ required: true, message: "Nhập tên" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Danh mục"
            rules={[{ required: true, message: "Chọn danh mục" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Giá"
            rules={[{ required: true, message: "Nhập giá" }]}
          >
            <Input type="number" min={0} />
          </Form.Item>

          {/* Upload ảnh */}
          <Form.Item name="image" label="Ảnh">
            <Upload
              beforeUpload={async (file) => {
                const url = await uploadImage(file);
                form.setFieldsValue({ image: url });
                return false; // ngăn Upload tự upload
              }}
              showUploadList={false}
            >
              <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
            </Upload>
            {form.getFieldValue("image") && (
              <Image src={form.getFieldValue("image")} width={100} />
            )}
          </Form.Item>

          <Form.Item
            name="status"
            label="Trạng thái"
            rules={[{ required: true }]}
          >
            <Select
              options={[
                { value: "active", label: "Hoạt động" },
                { value: "inactive", label: "Ngừng" },
              ]}
            />
          </Form.Item>
          <Form.Item noStyle>
            <div className="flex justify-end gap-2">
              <Button onClick={() => setOpen(false)}>Hủy</Button>
              <Button type="primary" htmlType="submit">
                Lưu
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
