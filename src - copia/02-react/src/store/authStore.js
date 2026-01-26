import { create } from 'zustand'

export const useFavoritesStore = create((set, get) => ({
  favorites: [],

  addFavorite: (item) =>
    set((state) => ({
      favorites: state.favorites.includes(item) ? state.favorites : 
      [...state.favorites, item],
    })),

  removeFavorite: (item) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item !== item),
    })),

  isFavorite: (item) => {
    const { favorites } = get()
    return favorites.includes(item)
  },

  toggleFavorite: (item) => {
    const { isFavorite, addFavorite, removeFavorite } = get()
    isFavorite(item) ? removeFavorite(item) : addFavorite(item)
  },

  favoritesCount: () => get().favorites.length,
}))