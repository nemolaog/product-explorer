import { Product } from '../types/index.ts';

export const mockProducts: Product[] = [
    {
        id: 1,
        title: "Wireless Headphones",
        price: 89.99,
        description: "Premium noise cancelling wireless headphones with 30h battery life.",
        category: "Electronics",
        image: "https://picsum.photos/id/20/300/300",
        rating: { rate: 4.5, count: 1234 }
    },
    {
        id: 2,
        title: "Smart Watch Pro",
        price: 249.99,
        description: "Fitness tracking, heart rate monitor, GPS.",
        category: "Electronics",
        image: "https://picsum.photos/id/201/300/300",
        rating: { rate: 4.8, count: 892 }
    },
    {
        id: 3,
        title: "Leather Backpack",
        price: 59.99,
        description: "Waterproof vintage leather backpack for daily use.",
        category: "Fashion",
        image: "https://picsum.photos/id/201/300/300",
        rating: { rate: 4.3, count: 567 }
    },
    // 可以继续添加更多商品（建议先加 8-10 个）
];

export default mockProducts;