<template>
  <a :href="url" :class="['btn', variantClass]" target="_blank" rel="noopener noreferrer">
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
      if (this.url.startsWith('#')) {
        event.preventDefault(); // Prevent default if the URL is not set
      }
      this.$emit('click'); // Emit click event for the parent component to handle if necessary
    }
  }
};
</script>


<style scoped>
a.btn {
  font-family: 'Jost', sans-serif; /* Ensure Jost font is imported in your project */
  font-weight: 600; /* semibold */
  font-size: 16px;
   /* Adjusted sizes */
  padding: 0.5rem 1rem; /* Provides padding inside the button */
  border: none; /* Removes border if not needed */
  border-radius: 10px; /* Optional: adds rounded corners */
  cursor: pointer; /* Changes cursor to pointer on hover */
  width:420px;
  height: 52px;
  background-color: #292F36;

}
a.btn:hover {
  background-color: #1F2429; /* Example: darken button on hover */
  color: #FFFFFF; /* Change text color on hover */
}
@media (max-width: 768px) {
  .button {
    padding: 10px 20px;
    font-size: 14px;
  }
  .link-box {
    padding: 1rem;
  }
}


</style>