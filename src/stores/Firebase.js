import { defineStore } from 'pinia';
import { db } from "@/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const useDatabaseStore = defineStore("store", {
  state: () => ({
    items: [],
  }),
  actions: {
    async fetchData() {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const items = [];
        querySnapshot.forEach(doc => {
          const dataJson = doc.data();
          items.push({ id: doc.id, ...dataJson });
        });
        this.items = items;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async addUser(user) {
      try {
        const docRef = await addDoc(collection(db, "users"), user);
        await this.fetchData();
      } catch (error) {
        console.error('Error adding document:', error);
      }
    },
    async deleteUser(userId) {
      try {
        await deleteDoc(doc(db, 'users', userId));
        await this.fetchData();
      } catch (error) {
        console.error('Error deleting document:', error);
      }
    },
  },
});
