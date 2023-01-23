<template >
  <button class="btn"><slot></slot></button>
</template>
<script>
// bu componentda biz generic btnlarimizni yozib olib boshqa componentlarda caqirsak boladi
//bu yerda slot react {children} ga teng yana xoxlagan titleni qabul qiladi.
export default {
  name:'PrimaryBtn'
}
</script>
<style >
  
</style>