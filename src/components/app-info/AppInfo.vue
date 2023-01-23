<template>

  <div class="app-info">
   <p class="fs-3 text-uppercase">All Movies: {{ data }}</p>
   <p class="fs-4 text-uppercase"> Watched Movies: {{ dataFavourite }} </p>
  </div>

</template>
<script>

export default {
 
  props:{
    data:{
      type:Number,
      required:true,
    },
    dataFavourite:{
      type:Number,
      required:true,
    },
  },
}
</script>
<style scoped>
.app-info{
    padding: 1.5rem;
  border-radius: 4px;
  /* background-color: #fcfaf5; */
  background-color:  #41B883;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>