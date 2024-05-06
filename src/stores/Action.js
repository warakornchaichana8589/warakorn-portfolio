// Import necessary modules
import { defineStore } from 'pinia';

// Define Pinia store
export const useAlertStore = defineStore("alert",{

  state: () => ({
    showAlertState: true,
  }),
  actions: {
   
    hideAlert() {
      this.showAlertState = false;
      console.log('hideAlert')
    },
    showAlert() {
        this.showAlertState = true;
        console.log('showAlert')
      },
  },
});
