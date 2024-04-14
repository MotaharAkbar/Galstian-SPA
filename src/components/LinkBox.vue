<template>
  
  <div class="link-box">
    <ButtonComponent url="https://www.galstian-furniture.com" variant="primary">Website</ButtonComponent>
    <ButtonComponent url="https://www.instagram.com/galstianfurniture" variant="primary">Instagram</ButtonComponent>
    <ButtonComponent url="https://www.linkedin.com/company/galstian-furniture" variant="primary">Linkedin</ButtonComponent>
    <ButtonComponent url="https://wa.me/+982188740199" variant="primary">Whatsapp</ButtonComponent>
    <ButtonComponent url="https://g.co/kgs/HJ8qqj6" variant="primary">Our Store</ButtonComponent>
  </div>
  <div class="langChange">
    <button>En</button>
    <button>فا</button>
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
  align-items: center;
  gap: 7px;
  padding: 1rem; /* More reasonable padding */
  border-radius: 10px; /* Correct syntax */
}

</style>
