<template >
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
</template>
<script>
export default {
  name:"Pagination"
}
</script>
<style >
  
</style>