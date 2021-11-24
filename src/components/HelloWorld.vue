<template>
  <div class="">
    <h1 class="text-success">helloword</h1>
    {{ msg }}
    <span v-html="msg"></span>
    <input type="text" v-model="name" @change="nameChanged">
    <p>{{ count }} </p>
    <button @click="count++">increase</button>
    <button @click="decrease">decrease</button>
    <p v-bind:class="box">v-bind:class</p>
    <p>Bind <a v-bind:href="link" v-bind:title="title">click</a></p>

    <p v-on:mousemove="getData">{{ x }} / {{ y }}</p>
    <span v-on:mousemove.stop></span>
    <input type="text" @keyup.space.enter="getMsg">
  </div>
  
</template>

<script>
export default {
  name: "HelloWorld",
  data(){
    return{
      msg:'<h1>hello</h1>',
      name: 'uma',
      count: 0,
      box: "color",
      link: "https://vuejs.org/v2/api/#v-bind",
      title: 'bind tutorial',
      x:0,
      y:0
    }
  },
  methods: {
    nameChanged: function(){
      console.log(this.name);
    },
    decrease: function(){
        this.count--;
    },
    getData: function(event){
        this.x = event.clientX;
        this.y = event.clientY;
    },
    getMsg: function(){
        alert("working");
    }
  }
}

</script>


<style scoped>
</style>
