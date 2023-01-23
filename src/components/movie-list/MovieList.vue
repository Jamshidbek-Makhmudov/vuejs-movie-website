<template lang="">

<ul class="list-group movie-list" >

<Items v-for="data in data" :data="data"
 :key="data.id"
  @onToggle="$emit('onToggle',$event)" 
  @onDelete="$emit('onDelete',data.id)"
 />
 <!-- ondelete da data.id berilgan lekin shuni ham $event qilib qoysa bolaveradi ikalsi birxil
  -->
 <!-- bu yerda $event bersak childan kelgan objectni hammasni ozini ichiga ovoladi -->
 <!-- buyerda emitdan kelgan onlike nomli id @onLike nomi bilan boglab olib emit orqali yana parentga jonatdik -->
 <!-- $emit faqat yuborish vazifasini bajaradi -->
 <!-- bu yerda @onLike <Items/> childdan kelayotgan methodga tashlangan following endi ikalasi boglandi -->
<!-- biz har doim listlar bilan ishlayotganimizda key atributini berishimiz kerak -->
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
    required:true,
    //nega bu yerda type:Array boldi va <Items/>da Object boldi?
    //javob: chuncki biz buyerda data silom hammasni ovolib childga yana property 
    //qilib jonatib yuborishimiz kerak
  },
 },
}
</script>
<style scoped>
.movie-list{
  margin-top: 2rem;
    padding: 1.5rem;
  border-radius: 4px;
  /* background-color: #fcfaf5; */
  background-color:  #41B883;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
  
</style>