<template>
  <!-- ======== Vue Directives=========
        **v-text
        **v-html
        **v-show
        **v-if
        **v-else
        **v-else-if
        **v-bind (or) :
        **v-model  
        **v-for
   ===========-->
    <div>
    <!-- ======= Start: v-text ========= -->
          <div>
              <strong>V-text:</strong>
              <p v-text="text"></p>
        </div><br>
        <!-- ======= End: v-text ========= -->
        <!-- ======= Start: v-html ========= -->
          <div>
              <strong>V-html:</strong>
              <p v-html="html"></p>
        </div><br>
        <!-- ======= End: v-html ========= -->
        <!-- ======= Start: v-show ========= -->
          <div>
              <strong>V-show:</strong>
              <p v-show="show">I will appear when 'show' is true</p>
        </div><br>
      <!-- ======= End: v-show ========= -->

      <!-- ======= Start: v-if && v-else && v-else-if ========= -->
          <div>
              <strong>V-if | V-else-if | v-else:</strong>
              <p v-if="isIfVisible">I'm visible when 'if' is true</p>
              <p v-else-if="isElseIfVisible">I'm visible when 'if' is false and 'else-if' is true</p>
              <p v-else>I'm visible when both 'if' and 'else-if' is false</p>
        </div><br>
      <!-- ======= End: v-if ========= -->

      <!-- ======= Start: v-bind ========= -->
          <div>
            <strong>V-bind:</strong>
            <p v-bind:class="bind ? 'bg-blue' :'bg-green'">I can bind with attributes</p>
                              <!-- or -->
            <p :class="bind ? 'bg-blue' :'bg-green'">I can bind with attributes</p>
            <p :class="bindedClass">Hii, this is bind</p>
        </div><br>
      <!-- ======= End: v-bind ========= -->

      <!-- ======= Start: v-model ========= -->
          <div>
            <strong>V-model:</strong>
            <input type="text" v-model="name"/>
            <p>Hi, I'm two way binding</p>
        </div>
        <div>Wait! What is the difference between You and V-bind</div><br>
      <!-- ======= End: v-model ========= -->

      <!-- ======= Start: v-model ----- v-bind ========= -->
          <div>
            <strong>V-model ~ v-bind:</strong><br>
            <input type="text" value="Uma" v-model="name"/> <br/><br>
            <input type="text" :value="nameBind" /> <br/>
        </div><br>
      <!-- ======= End: v-model ========= -->

      <!-- ======= Start: v-for ========= -->
          <div>
            <strong>V-for with array:</strong>
            <ul>
                <li v-for="(arr,index) in arrayLoop" :key="index">
                    {{arr}}
                </li>
            </ul><br/>

            <strong>V-for with object:</strong>
            <ul>
                <li v-for="(value,items) in object" :key="items" >
                    {{items}} - {{value}}
                </li>
            </ul><br/>

            <strong>V-for with Array of Object:</strong>
            <ul>
                <li v-for="(arr,index) in arrOfObjLoop" :key="index" >
                    {{arr.frameWork}}<ul>
                        <li>{{arr.type}}</li>
                    </ul>
                </li>
            </ul>
        </div>
      <!-- ======= End: v-for ========= -->
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
        text: 'Welcome to Your Vue.js App',
        html: "<ol><li>Uma</li><li>Poonkamali</li></ol>",
        show: true,
        isIfVisible: false,
        isElseIfVisible: false,
        bind:true,
        name:'',
        bindedClass:'bg-green',
        nameBind:'PoonKamali',
        object:{
            name: 'Krishna',
            Skill: 'Vue.Js',
            Exp: '8 Months'
        },
        arrayLoop:['vue.js','react.js','angular.js','node.js','express.js'],
        arrOfObjLoop:[
            {
                id: 1,
                frameWork:'Vue.js',
                type:'Frontend',
            },
            {
                id: 2,
                frameWork:'React.js',
                type:'Frontend',
            },
            {
                id: 3,
                frameWork:'Angular.js',
                type:'Frontend',
            },
            {
                id: 4,
                frameWork:'Node.js',
                type:'Backend',
            },
            {
                id: 5,
                frameWork:'Express.js',
                type:'Backend',
            },
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.bg-blue{
    color: rgb(35, 35, 236);
}
.bg-green{
    color: #42b983;
}
</style>
