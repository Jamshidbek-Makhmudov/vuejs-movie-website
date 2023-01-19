<template>
  <div class="app font-monoscape ">
<div class="content">
  <AppInfo :data="data.length" :dataFavourite="data.filter(c=>c.favourite).length" />
  <!-- esingdan chiqmasin, bu yerda :dan keyingi nomni ozing berasan  -->
  <!-- ikkinchisi url datani nomi boladi, component ichida ozing bergan nomni ishlatasan -->
  <div class="search-pannel">
<SearchPanel/>
<AppFilter/>
  </div>
  <MovieList :data="data" />

  <MovieAddForm @createMovie="createMovie"/>
</div>
  </div>
</template>
<script>
import AppInfo from '../app-info/AppInfo.vue'
import SearchPanel from '../search-pannel/SearchPanel.vue'
import AppFilter from '../app-filter/AppFilter.vue'
import MovieList from '../movie-list/MovieList.vue'
import MovieAddForm from '../movie-add-form/MovieAddForm.vue'
export default {
  components:{
    AppInfo,
    SearchPanel,
    AppFilter,
    MovieList,
    MovieAddForm,
  },
  data(){
    return{  
      data:[
        {
          name:'Omar',
          viewers:811,
          favourite:false,
          like:true,
        },
        {
          name:'Abu Bakr',
          viewers:911,
          favourite:false,
          like:false,
        },
        {
          name:'Hobbit',
          viewers:511,
          favourite:true,
          like:false,
        },
      ]
    }
  },
  //method bu state methodni ichida function declaration yoziladi
  methods:{
    createMovie(item){
    this.data.push(item)

    },
  },
  
}
</script>
<style>
.app{
  padding: 50px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: #000;
}
.content{
   display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 700px;
  background-color: #fff;
  padding: 5rem 0;
  /* margin: 0 auto; */
}
.search-pannel{

  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #41B883;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0,0,0,0.15);
}



/* [class*="col-"] {

}

@media only screen and (min-width: 600px) {


 }

@media only screen and (min-width: 768px) {
 

} */
</style>