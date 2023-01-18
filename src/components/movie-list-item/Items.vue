<template >

    <li class="list-group-item d-flex "
    :class="[{like:data.like},{favourite:data.favourite}]">
    <div class="inner-label">
    <span class="list-group-item-label">{{ data.name }}</span>
    </div>
    <div class="inner-input">
    <input type="number" class="list-group-item-input" :value="data.viewers">
    <!-- default value beayotganda ham v-bind qilib beriladi -->
    <!-- ya'ni inputni ichiga dinamik data qoshayotganimizda v-bind qilib ketishimiz kerak -->
    <div class="d-flex justify-content-center align-items-center">
    <button type="button"  class=" btn-cookie btn-sm">
    <i class="fas fa-cookie"></i>
    </button>
  
    <button type="button" class=" btn-trash btn-sm">
    <i class="fas fa-trash"></i></button>
    <i class="fas fa-star"></i>
    </div>
    </div>
    </li>

</template>
<script>
export default {
props:{
    data:{
        type:Object,
        required:true,
    },
},
  
}
</script>
<style scoped>
.list-group-item{
    border: none;
    padding: 15px 40px;
    border-bottom: 1px solid #3d5a88;
    display: flex;
      align-items: center;
      justify-content: space-between;

        align-items: center;
 
    

}
.list-group-item:last-child{
    border-bottom: none;
}
.list-group-item span{
line-height: 35px;
font-size: 20px;
cursor: pointer;
width: 550px;

}
.list-group-item input{
    width: 100px;
    line-height: 35px;
    font-size: 20px;
    text-align: center;
    border-radius: 8px;
    border: none;
    outline: none; 
    /* outline click qilgandagi effect degani */
 
}

.inner-input{
    display: flex;
      width: 20%;
    align-items: center;
   justify-content: space-between;

}
.list-group-item button{
    width: 35px;
    height: 35px;
    margin: 3px;
    font-size: 17px;
    border: none;
    cursor: pointer;
}
.list-group-item .btn-cookie{
    color: #e09f3e;

}
.list-group-item .btn-trash{
    color: #e5383b;

}
.list-group-item .fa-star{
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 16px;
    color: #ffd700;
    /* shu kodlar startni harakatga keltiradi */
    transition: 0.3s all;
    transform: translate(30px);
    opacity: 0;
    /*  */

}
/* shu kodlar startni harakatga keltiradi */
.list-group-item.like .fa-star{
    opacity: 1;
    transform: translate(0);
}
/*  */
.list-group-item.favourite .list-group-item-label, .list-group-item.favourite .list-group-item-input { 
    color: #e09f3e;
}




/* mobile */
/* 360px */
@media only screen and (min-width: 280px) and (max-width:540px) {
    .inner-input{
    display: flex;
    /* flex-direction: row; */
    align-items: center;
   justify-content: center;
   gap: 10px;
}
    .list-group-item{
        display: flex;
        flex-direction: column;
        align-items: center;
    border-bottom: 1px solid #3d5a88;
}

    .list-group-item span{
line-height: 35px;
font-size: 14px;
cursor: pointer;
width: auto;

}
.list-group-item input{
    width: 40px;
    line-height: 35px;
    font-size: 14px;
    text-align: center;
    border: none;
    outline: none;
}
 }
/* tablet */
@media only screen and (min-width: 541px) and (max-width:1080px) {
    .list-group-item{
        display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 90px;

    border-bottom: 1px solid #3d5a88;
}
    .inner-input{
    display: flex;
    /* flex-direction: row; */
    align-items: center;
   justify-content: center;
   gap: 40px;
}

    .list-group-item span{
line-height: 35px;
font-size: 20px;
cursor: pointer;
width: 550px;

}
.list-group-item input{
    width: 80px;
    line-height: 35px;
    font-size: 20px;
    text-align: center;
    border: none;
    outline: none;
}
 }

/* @media only screen and (min-width: 768px) {
 

} */
  
</style>