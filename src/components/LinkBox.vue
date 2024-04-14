<template>
  <div class="link-box">
  <img src="@/assets/GalstianLogo.png">
  <div id="slogan">
  <h4>Let Your Home Be Unique</h4>
  </div>
    <ButtonComponent url="https://www.galstian-furniture.com" variant="primary">Website</ButtonComponent>
    <ButtonComponent url="https://www.instagram.com/galstianfurniture" variant="primary">Instagram</ButtonComponent>
    <ButtonComponent url="https://www.linkedin.com/company/galstian-furniture" variant="primary">Linkedin</ButtonComponent>
    <ButtonComponent variant="primary">Whatsapp</ButtonComponent>
    <ButtonComponent url="https://g.co/kgs/HJ8qqj6" variant="primary">Our Store</ButtonComponent>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';

export default {
  components: {
    ButtonComponent,
  },
};
</script>

<style scoped>
.link-box {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-align: center;
  justify-content: center;
  align-items: center;
  width: 420px;
  height: 560px;
  gap: 1rem; /* Adjust the space between buttons */
  padding: 2rem; /* Add some padding inside the box */
  border-radius: 8px; /* Optional: rounds the corners of the box */
  margin: auto; /* Centers the box if the parent is also centered */
}
button {
    background-color : #292F36;
}
#slogan {
    width: 337px;
height: 42px;
flex-shrink: 0;
}
h4 {
    color: #F4F0EC;

text-align: center;
font-family: "DM Serif Display";
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 125%; /* 37.5px */
}
img {
    display: flex;
   
    height: 126px;
    width: 213px;
}
</style>
