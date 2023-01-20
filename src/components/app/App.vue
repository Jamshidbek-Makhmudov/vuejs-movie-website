<template>
  <div class="app font-monoscape ">
<div class="content">
  <AppInfo :data="data.length" :dataFavourite="data.filter(c=>c.favourite).length" />
  <!-- esingdan chiqmasin, bu yerda :dan keyingi nomni ozing berasan  -->
  <!-- ikkinchisi url datani nomi boladi, component ichida ozing bergan nomni ishlatasan -->
  <div class="search-pannel">
<SearchPanel  :updatePanel="updatePanel"/>
<AppFilter/>
  </div>
  <MovieList :data="onSearchPanel(data, searchPanelValue)" @onToggle="onToggle" @onDelete="onDelete"  />
  <!-- bu yerda emitdan kelgan onlikeni onlike nomi bilan boglab oldik bu yerda emit yoq  -->
  <!-- chunki biz boshqa parentga jonatmaymiz, qabulgan onLikeni pasga methodsga yozib qoyamiz -->
<!-- buyerda @onLike childdan kelgan methodga tashlangan follow, "onLike" esa biz qabul qilib yangi nomergan method -->
<!-- bu methodsni hohlagancha nomlasak boladi -->
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
          like:false,
          id:1,
        },
        {
          name:'Abu Bakr',
          viewers:911,
          favourite:false,
          like:false,
          id:2,
        },
        {
          name:'Hobbit',
          viewers:511,
          favourite:false,
          like:false,
          id:3,
        },
      ],
      searchPanelValue:'',
      filter:'all',
    }
  },
  //method bu state methodni ichida function declaration yoziladi
  methods:{
    createMovie(item){
    this.data.push(item)

    },
    onToggle({id,prop}){
  this.data= this.data.map(item=>{
        if(item.id===id){
          return{...item,[prop]:!item[prop]}
        }
        return item
      })
      //bu yerda biz onLike bn onFavourite method functionlarini birlashtirib onToggle qilib qoydik

    },
    onDelete(id){
      this.data=this.data.filter(c=>c.id !==id)
    },
    onSearchPanel(kinolarRoyhati, searchPanelValue){
      if(searchPanelValue.length==0){
        return kinolarRoyhati
      }
      return kinolarRoyhati.filter(c=>c.name.toLowerCase().indexOf(searchPanelValue)> -1)
    },
    updatePanel(value){
this.searchPanelValue=value
    },
    onFilter(arr, filter){
      switch (filter) {
        case 'popular':
          return arr.filter(c=>c.like)
          case 'most viewed':
            return arr.filter(c=>c.viewers >500)
          
          break;
      
        default:
          break;
      }
    }

  },
}
</script>
<style>
.app{
  padding: 10px;
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