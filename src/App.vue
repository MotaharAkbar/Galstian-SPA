

<template>
<div>
  <img src="@/assets/GalstianLogo.png" id="LogoGal">
</div>
  <LinkBox/>

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

#LogoGal {
  width: 15em;
  height: auto; /* Set a fixed height */
  object-fit: cover; /* Cover the container without losing aspect ratio */
}

#app {
      display: flex;
      flex-direction: column;
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
  gap: 15rem; /* Adjust the gap between buttons as needed */
}

    }
.buttons-column {
  display: flex;
  flex-direction: column;

}
</style>
