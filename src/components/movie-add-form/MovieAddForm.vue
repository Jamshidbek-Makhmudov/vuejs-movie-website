<template >
  <div class="movie-add-form  ">
  <h3>Add new movies</h3>
  <form  action="" class="add-form d-flex">
  <input placeholder="type movie?..." type="text" class="form-control new-movie-label">
  <input type="text" placeholder="how many times watched?" class="form-control new-movie-label">
  <button class="btn btn-outline-dark" type="submit">add</button>
  </form>
   
    
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped >
.movie-add-form{
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #41B883;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0,0,0,0.15);
}
.add-form{
  display: flex;
  align-items: center;
  gap: 10px;
}
  
</style>