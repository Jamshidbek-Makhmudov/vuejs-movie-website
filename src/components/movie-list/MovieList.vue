<template lang="">
<ul class="movie-list list-group" >

<Items v-for="data in data" :data="data" />
<!-- v-for buyrugi url larni itteratsiya qilishda ishlatiladi -->
<!-- v-bind orqali olingan urlni property qilib jonatish mukin -->
<!-- v-on buyrugi statelar uchun -->
<!-- v-on ni qisqatrmasi @ edi xuddi shu narsani v-bind uchun : belgi ishlatilinadi -->
<!-- bind sozini ozi ma'nosi boglash degani -->
</ul>
</template>
<script>
import Items from '../movie-list-item/Items.vue'
export default {
  components:{
    Items,
  },
 props:{
  data:{
    type:Array,
    //nega bu yerda type:Array boldi va <Items/>da Object boldi?
    //javob: chuncki biz buyerda data silom hammasni ovolib childga yana property 
    //qilib jonatib yuborishimiz kerak
    required:true,
  },
 },
}
</script>
<style scoped>
.movie-list{

  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #41B883;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0,0,0,0.15);
}
  
</style>