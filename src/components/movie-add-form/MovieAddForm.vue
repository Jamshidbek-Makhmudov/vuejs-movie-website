<template >
  <div class="movie-add-form  ">
  <h3>Add new movies</h3>
  <form class="add-form d-flex" @submit.prevent>
    <!-- formalar bn ishlayotganda, buttonni bosgan server update bolib ketadi buni oldini olish uchun -->
    <!-- formani oziga @submit.pevent yozib qoyish kerak -->
    <!-- xuddin shu narsani pasda addMovie onClick methodiga ham yozsak boladi -->
    <!-- bunda biz addMovie(e){e.preventDefault()} deb yozishimiz kerak boladi -->
  <input placeholder="type movie?..." type="text"
   class="form-control new-movie-label" 
   :value="name"
   @input="name=$event.target.value"/>
   <!--   @input="name=$event.target.value" bu kodlar orqlai biz pasda onchange method input ochib pasda yozib tepada ham yozishni oldini olamiz -->
   <!-- vueda methodlar reactda statega teng desak ham boladi. -->
   <!-- bu yerda @ v-onni qisqartmasi, name=$event changeHandleNamega teng -->
   <!-- biz $eventdan foydalansak pasda scriptda qayta qaytda methods yozishdan saqlangan bolamiz -->
  <input type="number" placeholder="how many times watched?"
   class="form-control new-movie-label" 
   :value="viewers" @input="viewers=$event.target.value"/>
  <button class="btn btn-outline-dark" type="submit" @click="addMovie" >add</button>
  </form>
  </div>
</template>
<script>
//inputlarda reactda ishlamoqchi bolsak ref yani boshqarib boladiagn inputlardan
//vuejsda esan ikkiyoqlamali lardan foydalamiz vazifasi bir xil
//script datani ichidagi malumotlarga pasda methoddan this orqali chiqamiz
export default {
  data(){
    return{
      name:'',
      viewers:'',
    }
  },
  methods:{
addMovie(){
  const newMovie={
    name:this.name,
    viewers:this.viewers,
    favourite:false,
    like:false,
  }
  this.$emit('createMovie', newMovie)  //boldi parentga ketti
  this.name=''
  this.viewers=''
// addMovie bu onClick ichidagilar object, bu objectni biz parentga yuboramiz yani Appdagi datalarga
// buning uchun function yozib 2ta argument kiritib olamiz 1- event nomi ikkinchisi bizni yuborayotgan object nomi
//buni $emit yoramida qilamiz
}
  },
  // methods:{
  //   changeHandlerName(e){
  //     console.log(e.target.value);

  //   }
  // } // bu changeHandle bizga kerak emas yuqorida optimal yol bn yozib olganmiz
  
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