<template >
  <div class="container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'Container'
}
</script>
<style >
  .container{
    padding: 1.5rem;
  border-radius: 4px;
  /* background-color: #fcfaf5; */
  background-color:  #41B883;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
  }
</style>