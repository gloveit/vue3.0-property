<template>
  <div>
    <div>
      <h2>{{ title }}</h2>
      <!-- <input type="text" readonly  value="this is a input box"/> -->
      <form>
        <input
          type="number"
          pattern="[0-100]"
          v-model="form.unit"
          readonly
          @fo="handleFocus"
          class="inp"
        />
        <input type="file" multiple ref="files" @change="handleFiles" />
        <h3>已上传文件</h3>
        <p v-for="(value,index) in fileList" :key="index">
          <span>{{ value.name }}</span>
          <button @click="deleFile(index)" class="delete">删除</button>
        </p>
        <button @click="handleSub">提交审核</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'autoEs',
    data() {
      return {
        name: 'xiaoming',
        address: 'ajjljl',
        title: 'input框属性为disable',
        tables: {
          tbody: [],
          thead: [],
          head: '统计表'
        },
        form: {
          unit: 0,
          files: []
        },
        fileList: []
      };
    },
    methods: {
      say() {
        return 'hello gemin';
      },
      handleSub() {
        console.log('form', this.form);
      },
      handleFiles() {
        let file = this.$refs.files;
        let t = file.files;
        console.log(t);
        console.log(t[0]);
        // Object.assign(this.fileList, { type: t[0].type, name: t[0].name});
        console.log(t[0].type);
        console.log(t[0].name);
        // this.$set(this.fileList, type,t[0].type)
        // this.$set(this.fileList, name,t[0].name)
        for (let item in t) {
          console.log(item);
          if (t[item].name !== undefined && t[item].type !== undefined) {
            this.fileList.push({ name: t[item].name, type: t[item].type });
          }
        }
        console.log(this.fileList);
      },
      deleFile(index) {
        this.fileList.splice(index, 1);
      },
      handleFocus() {
        console.log('readonly has focus events');
      }
    }
  };
</script>

<style>
  .delete:hover {
    cursor: pointer;
  }
  .inp:hover{
    cursor: pointer;
  }
</style>
