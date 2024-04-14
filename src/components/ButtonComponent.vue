<template>
  <a :href="url" :class="['btn', variantClass]" target="_blank" rel="noopener noreferrer" @click="clickHandler">
    <slot>TitleSample</slot> <!-- Default slot content -->
  </a>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    variant: {
      type: String,
      default: 'primary', // default variant if none is provided
    },
    url: {
      type: String,
      default: '#', // Default URL if none is provided
    }
  },
  computed: {
    variantClass() {
      // Apply different classes based on the variant prop
      return `btn-${this.variant}`;
    }
  },
  methods: {
    clickHandler(event) {
      if (this.url === '#') {
        event.preventDefault(); // Prevent default if the URL is not set
      }
      this.$emit('click', event); // Emit click event with the event for more control
    }
  }
};
</script>

<style scoped>
.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: 'Jost', sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100%; /* Make button width responsive */
  max-width: 420px; /* Maximum width */
  height: 52px;
  background-color: #CDA274;
  color: #FFFFFF; /* Ensure text color is white */
  text-decoration: none; /* Remove underline from links */

  
}

.btn:hover {
  color:#CDA274;
  background-color: #F4F0EC;
  box-shadow: 0px 0px 20px 0px rgba(205, 162, 116, 0.50);
}
</style>
