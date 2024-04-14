

<template>

  <div id="app">
  
  <LinkBox/>
  </div>
</template>

<script>
import LinkBox from './components/LinkBox.vue';

export default {
  name: 'App',
  components: {
    LinkBox,
  }
};
</script>

<style>
h1 {
    display: flex;
    color: #FFFFFF;
}
#app {
      display: flex;
      padding-top: 19.148px;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      background-image: url('@/assets/Image 3.png');
      background-size: cover;
  background-position: center center;
      min-height: 100vh;
      #app {
  /* Existing styles */
  background-repeat: no-repeat;
  background-attachment: fixed;
}

    }
.buttons-column {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Adjust the gap between buttons as needed */
}
</style>
