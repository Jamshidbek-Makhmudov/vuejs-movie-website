<template>
  <div class="app font-monoscape ">
<div class="content">
  <AppInfo :data="data.length" :dataFavourite="data.filter(c=>c.favourite).length" />
  <!-- esingdan chiqmasin, bu yerda :dan keyingi nomni ozing berasan  -->
  <!-- ikkinchisi url datani nomi boladi, component ichida ozing bergan nomni ishlatasan -->
  <div class="search-pannel">
<SearchPanel  :updatePanel="updatePanel"/>
<AppFilter :updateFilterHandler="updateFilterHandler" :filterName="filter"/>
  </div>
  <!-- bu yerda if else conditionlari mavzusi -->
  <div v-if="!data.length && !isLoading"> <h1 class="text-center mt-4 text-danger">There  no any movies current time!</h1> </div>
  <div v-else-if="isLoading" class="d-flex justify-content-center mt-4"> <Snipper /> </div>
  <MovieList v-else :data="onFilter(onSearchPanel(data, term),filter)" @onToggle="onToggle" @onDelete="onDelete"  />
  <!-- bu yerda emitdan kelgan onlikeni onlike nomi bilan boglab oldik bu yerda emit yoq  -->
  <!-- chunki biz boshqa parentga jonatmaymiz, qabulgan onLikeni pasga methodsga yozib qoyamiz -->
<!-- buyerda @onLike childdan kelgan methodga tashlangan follow, "onLike" esa biz qabul qilib yangi nomergan method -->
<!-- bu methodsni hohlagancha nomlasak boladi -->
<!-- bu yerdan boshlab pagination mavzusi -->
<div class="d-flex justify-content-center mt-4">
  <nav aria-label="pagination">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li v-for="pageNumber in totalPages" :key="pageNumber" @click="changePage(pageNumber)" :class="{'active': pageNumber===page}">
    <span class="page-item"><a class="page-link" href="#">{{ pageNumber }}</a></span>
    </li>

    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</div>
<!-- pagination shu yergacha -->


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
import axios from 'axios'
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
      data:[ ],
      term:'',
      filter:'all',
      isLoading:false,
      limit:10,
      page:1,
      totalPages:0,
    }
  },
  //method bu state methodni ichida function declaration yoziladi
  methods:{
   async createMovie(item){
    //post methodi 3ta argument oladi: 1- qayerga 2- nima yuborishimiz, 3-configuratsiya
    try{

      const response=await axios.post('https://jsonplaceholder.typicode.com/posts', item)
      this.data.push(response.data)
    }catch(error){
      alert(error.message)
    }

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
    onSearchPanel(kinolarRoyhati, term){
      if(term.length==0){
        return kinolarRoyhati
      }
      return kinolarRoyhati.filter(c=>c.name.toLowerCase().indexOf(term)> -1)
    },
    onFilter(arr, filter){
      switch (filter) {
        case 'popular':
          return arr.filter(c=>c.like)
          case 'mostViewers':
            return arr.filter(c=>c.viewers >500)    
        default:
          return arr
      }
    },
    updatePanel(value){
this.term=value
    },
    updateFilterHandler(filter){
      this.filter=filter
    },
   
    //vuejsda API dan ma'lumotlar shu yol bilan chaqiriladi, axios yordamida chaqirildi:
    async fetchMovie(){
      try{
        this.isLoading=true
     

          
          const response=await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params:{
              _limit: this.limit,
              _page: this.page,
            },
          })
          const newArr=response.data.map(item=>({
            id:item.id,
            name:item.title,
            like:false,
            favourite:false,
            viewers:item.id*100,
          }))
          this.totalPages= Math.ceil(response.headers['x-total-count'] / this.limit)
          this.data=newArr
      
      

      } catch(error){
        
        alert(error.message);
      }    finally{
          this.isLoading=false  
        }  
    },
    changePage(page){
      this.page=page
      // this.fetchMovie()   bu fetcMOovieni shuyerga yozsa ham boladi, yoki pasda watch objectini ichiga yozsak ham boladi
    },
    
    
    
  },
  mounted(){
    this.fetchMovie()
  },
  watch:{
    page(){
      this.fetchMovie()
    }
    //watch object methodi bu vuejsga tegishli bolib, bizda qandaydir state ozgarsa ishlaydigan object hisoblanadi va oz ichiha
    //methodlarni qabul qiladi.
  },
}
</script>
<style>
/* .pagination{
  width: 100%;
  height: 100px;
  background-color: grey;
} */
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
  min-height: 900px;
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