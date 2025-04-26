import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useBasket = create(
    persist(
        (set, get) => ({
            data: [],

            addToBasket: (recData) => {
                const existingItem = get().data.find(item => item.id === recData.id)

                if (existingItem) {
                    return false
                } else {
                    set((state) => ({ data: [...state.data, { ...recData, quantity: 1 }] }))
                    return true
                }
            },
            del: (id) => {
                set((state) => ({ data: state.data.filter(item => item.id !== id) }))
            },
            plus: (id) => {
                set((state) => ({
                    data: state.data.map(item =>
                        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                }))
            },
            minus: (id) => {
                set((state) => ({
                    data: state.data.map(item =>
                        item.id === id
                            ? { ...item, quantity: (item.quantity > 1) ? item.quantity - 1 : 1 }
                            : item
                    )
                }))
            },
        }),
        {
            name: 'basket-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useBasket