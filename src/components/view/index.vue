<template>
 <div class='main-wrap'>
    <el-container style="height: 100%"> 
        <el-header class="main-header">
          <h2>VUE3.0新特性</h2>
        </el-header>
        <el-container style="height:100%">
          <el-aside class="main-aside" width="200">
            <vmenu></vmenu>
          </el-aside>
          <el-container>
            <el-main class="main-content">Main</el-main>
            <el-footer class="main-footer">Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>
 </div>
</template>

<script>
// import header from '@/components/layout/header'
import vmenu from '@/components/layout/aside'
// import content from '@/components/layout/content'
// import footer from '@/components/layout/footer'
export default {
 components: {
  // header,
  vmenu
  // content,
  // footer
 },
 data() {
  return {
   
  };
},
 computed: {},
 watch: {},
 methods: {
  
 },
 created() {
 
 },
 mounted() {
 
 },
}
</script>

<style lang='scss'> 
.main-wrap {
   width: 100%;
   height: 100%;
  .main-header {
    background: #ccc;
  }
  .main-aside {
    width: 200px;
    height: 100%;
    /* background: #5a5b5c; */
  }
  .main-content {
    height: 340px;
    background: #0f0;
  }
  .main-footer {
    height: 60px;
    background: #000;
  }
}

</style>