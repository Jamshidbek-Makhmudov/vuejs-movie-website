<template  >
  <div class="'btn-group'">
  <button v-for="btn in filterButtons" :key="btn.name"
   class="btn" :class="[filterName===btn.name ? 'btn-dark':'btn-outline-dark']"
   @click="filterHandler(btn.name)"> {{btn.title }}</button>
  </div>
  <!-- v-for ni urlni jonatish uchun degan edi, togrilab ketaman, v-for bu reactda datani map qilishga teng -->
  <!-- bu yerda btn mapni ichidagi item ga teng in dan keyingi esa, map qilayotgan dataning nomi -->
</template>
<script> 
export default {
  props:{
    updateFilterHandler:{
      type:Function,
      required:true,

    },
    filterName:{
      type:String,
      reuqired:true,

    },
  },
  data(){
    return{
      filterButtons:[
        {
title:"all movies",
name:'all',
        },
        {
title:"popular movies",
name:'popular',
        },
        {
title:"most viewed movies",
name:'mostViewers',
        },
      ],
      filter:'all'
    }
  },
  methods:{
    filterHandler(filter){
      this.filter=filter
      this.updateFilterHandler(this.filter)

    }
  }
}
</script>
<style scoped>
 
  
</style>