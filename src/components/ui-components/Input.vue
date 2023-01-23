<template >
 <input type="text" class="form-control" :value="modelValue" @input="updateInput">
</template>
<script>
export default {
  name:'Input',
  props:{
    modelValue:[String,Number],
   term:[String,Number],
  },
  methods:{

    updateInput(e){
      this.$emit('update:modelValue', e.target.value)
    }
  },
}
//v-model suhbatda soraladigan asosiy savollardan biri: u inputlarni generic qilganda, $emit qilishda va functionlarni
//umumiy generic inputga yozvovotganimzda ishlatilinadi.
//vue-3 da v-modelni valuesini xoxlagancha berib ishlatsak boladi buning uvhun v-model yozgan joyimizga v-model:valueNomi
//qilib yozib ketishimiz mumkin boladi.

</script>
<style >
  
</style>