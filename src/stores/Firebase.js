import { db, auth } from "@/firebase";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";
import { signInWithEmailAndPassword, signOut  } from "firebase/auth";

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
        querySnapshot.forEach((doc) => {
          const dataJson = doc.data();
          items.push({ id: doc.id, ...dataJson });
        });
        this.items = items;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async addUser(user, router) {
      try {
        const docRef = await addDoc(collection(db, "users"), user);
        await this.fetchData();
        await router.push("/all-projects");
      } catch (error) {
        console.error("Error adding document:", error);
        alert(error);
      }
    },
    async deleteUser(userId) {
      try {
        await deleteDoc(doc(db, "users", userId));
        await this.fetchData();
      } catch (error) {
        console.error("Error deleting document:", error);
      }
    },
    async userLogin(email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        return {status: 'ok' ,user: user };
      } catch (error) {
        return { status: 'error' , message: error.message };
      }
    },
    async userLogout() {
      try {
        await signOut(auth);
        return {status: 'ok' };
      } catch (error) {
        return { status: 'error' , message: error.message };
      }
    }
  },
});
