import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

// Vuetify 3 imports and setup
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Import Vuetify styles globally

const vuetify = createVuetify({
  // any Vuetify options you want to include
  // this can include theme configuration, icons configuration, etc.
});

const app = createApp(App);

// Use Vuetify instance with the app
app.use(vuetify);

app.mount('#app');
