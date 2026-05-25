import { create } from 'zustand';
import { Product } from '../types';

export interface CartItem extends Product {
    quantity: number;
}

interface CartState {
    items: CartItem[];
    totalItems: number;
    totalAmount: number;
    addItem: (product: Product) => void;
    removeItem: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
}

/**
 * Calculates the total quantity and total price of all cart items.
 * Keeping this logic in one helper makes the store easier to maintain.
 */

function calculateCartTotals(items: CartItem[]) {
    const totalItems = items.reduce((sum, item) =>
        sum + item.quantity, 0)
    const totalAmount = items.reduce((sum, item) =>
        sum + item.price * item.quantity, 0)

    return {
        totalItems,
        totalAmount,
    }
}

/**
 * Global cart store
 * Manages cart items, quantities, and derived cart totals.
 */
export const useCartStore = create<CartState>((set) => ({
    items: [],
    totalItems: 0,
    totalAmount: 0,

    addItem: (product) => set((state) => {
        const existingItem = state.items.find((item) => item.id === product.id)

        let updatedItems: CartItem[];

        if (existingItem) {
            // If the product already exists in the cart, increase its quantity.
            updatedItems = state.items.map((item) => item.id === product.id ? {
                    ...item, quantity: item.quantity + 1
                } : item
            )
        } else {
            // If the product is new, add it to the cart with quantity 1.
            updatedItems = [
                ...state.items,
                {
                    ...product,
                    quantity: 1,
                },
            ];
        }
        const totals = calculateCartTotals(updatedItems);
        return {
            items: updatedItems,
            ...totals,
        };
    }),

    removeItem: (productId) => set((state) => {
        const updatedItems = state.items.filter(
            (item) => item.id !== productId
        );
        const totals = calculateCartTotals(updatedItems);
        return {
            items: updatedItems,
            ...totals,
        };
    }),
    updateQuantity: (productId, quantity) => set((state) => {
        const updatedItems = state.items.map((item) => item.id === productId ? {
            ...item, quantity
        } : item).filter((item) => item.quantity > 0)

        const totals = calculateCartTotals(updatedItems);
        return {
            items: updatedItems,
            ...totals,
        };
    }),
    clearCart: () => ({
        items: [],
        totalItems: 0,
        totalAmount: 0,
    }),
}))












