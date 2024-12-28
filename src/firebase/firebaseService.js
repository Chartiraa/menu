import { ref, get } from 'firebase/database';
import { db } from './config';

// Tüm menü öğelerini getir
export const getAllMenuItems = async () => {
  try {
    const menuRef = ref(db, 'Cafe/Products');
    const snapshot = await get(menuRef);
    if (snapshot.exists()) {
      const items = [];
      snapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();
        items.push({
          id: childSnapshot.key,
          productName: item.productName,
          productPrice: item.productPrice,
          productCategory: item.productCategory,
          orderNumber: item.orderNumber
        });
      });
      return items.sort((a, b) => a.orderNumber - b.orderNumber);
    }
    return [];
  } catch (error) {
    console.error("Menü öğeleri getirilirken hata oluştu:", error);
    throw error;
  }
};

// Tüm kategorileri getir
export const getAllCategories = async () => {
  try {
    const categoriesRef = ref(db, 'Cafe/Categories');
    const snapshot = await get(categoriesRef);
    if (snapshot.exists()) {
      const categories = [];
      snapshot.forEach((childSnapshot) => {
        const category = childSnapshot.val();
        categories.push({
          id: childSnapshot.key,
          name: category.categoryName,
          image: category.categoryBanner,
          sortOrder: category.sortOrder
        });
      });
      // Kategorileri sortOrder'a göre sırala
      return categories.sort((a, b) => a.sortOrder - b.sortOrder);
    }
    return [];
  } catch (error) {
    console.error("Kategoriler getirilirken hata oluştu:", error);
    throw error;
  }
}; 