<template>
    <div class="bg1">
        <div class="container py-5">
            <div class="text-right">
                <router-link to="/dashboard"><h5>Back to Home</h5></router-link>
            </div>
            <div class="d-lg-flex justify-content-center">
                <div class="w-50 bg shadow">
                    <form action="" class="my-5 py-5 px-4">
                        <h3 class="text-center text-white pb-3"><span class="text-warning">A</span>dd <span class="text-warning">Y</span>our <span class="text-warning">S</span>picy <span class="text-warning">R</span>ecipe</h3>
                        <div class="">
                            <label class="font-weight-bold text-white">Title</label>
                            <input type="text" class="form-control" v-model="title">
                            <small v-if="errors.title" class="text-danger font-weight-bold">{{ errors.title }}</small>
                        </div>
                        <div class="">
                            <label class="mt-3 font-weight-bold text-white">Descripsion</label>
                            <textarea class="form-control" v-model="descripsion" rows="6"></textarea>
                            <small v-if="errors.descripsion" class="text-danger font-weight-bold">{{ errors.descripsion }}</small>
                        </div>
                        <div class="text-center">
                            <button class="btn btn-primary mt-4 w-100" @click.prevent="submit">ADD</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {data} from '@/data'
export default {
    name: 'Add',
    data(){
        return{
            title:'',
            descripsion:'',
            errors:[],
            recipes:[],
            data: data,
        }
    },
    methods: {
        submit(){
            // let data = this.$store.getters.getrecipe
            // data.push({
            //     title:this.title,
            //     descripsion:this.descripsion,
            //     readMoreActivated: false,
            // })
            // this.$store.commit('SET_RECIPE', data)
            // console.log(this.$store);

            this.errors = [];
            var errorcount = 0;

            if(!this.title){
                this.errors.title='Title is required';
                errorcount++;
            }
            if(!this.descripsion){
                this.errors.descripsion='Descripsion is required';
                errorcount++;
            }

            if(errorcount > 0){
                // return false;
                console.log('error');
            } else {
                // console.log(2);
                this.data.push({
                    title:this.title,
                    descripsion:this.descripsion,
                    readMoreActivated: false,
                });
                // this.title = "";
                // this.descripsion = "";
                this.$router.push( {
                    path: this.$route.query.redirect || '/dashboard'
                })
            }
        },
    },
}
</script>
<style scoped>
.bg1{
    background-color: greenyellow;
    height: 100vh;
}
.bg {
    background: url(../assets/add.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
</style>