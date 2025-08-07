type Product = {
    id: string;
    name: string;
    price: number;
    category: {
        id: string;
        name: string;
    };
    discount?: number;
};
const listProduct: Product[] = [
    {
        id: "P001",
        name: "Ao so mi",
        price: 300000,
        discount: 0.2,
        category: {
            id: "C001",
            name: "Thoi trang nam"
        }
    },
    {
        id: "P002",
        name: "Quan jean",
        price: 500000,
        category: {
            id: "C001",
            name: "Thoi trang nam"
        }
    },
    {
        id: "P003",
        name: "Giay sneaker",
        price: 800000,
        discount: 0.1,
        category: {
            id: "C002",
            name: "Giay dep"
        }
    }
];
function getFinalPrice(product: Product): number {
    if (product.discount) {
        return product.price * (1 - product.discount);
    }
    return product.price;
}
function printProductInfo(product: Product): void {
    console.log("ten: " + product.name);
    console.log("gia goc: " + product.price + "vnd");
    const finalPrice = getFinalPrice(product);
    console.log("gia sau giam: " + finalPrice + "vnd");
    console.log("danh muc: " + product.category.name);
}
for (let i = 0; i < listProduct.length; i++) {
    printProductInfo(listProduct[i]);
}
