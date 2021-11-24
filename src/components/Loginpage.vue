<template>
    <div class="container">
        <div class="d-lg-flex justify-content-center">
            <div class="my-5 w-75 shadow">
                <div class="row">
                    <div class="col-lg-5 bg1">
                        <div class="my-5 py-5 text-center">
                            <h4 class="pb-3"><span class="text-danger">W</span>elcome <span class="text-danger">t</span>o <span class="text-danger">S</span>pice</h4>
                            <img src='../assets/spicelogo.jpg' class="rounded">                           
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="p-4">
                            <router-link to="/register"><h6 class="text-right">Register</h6></router-link>
                            <form action="" class="my-5 py-5">
                                <div class="">
                                    <label class="font-weight-bold">User Name</label>
                                    <input type="text" class="form-control" v-model="name">
                                    <small v-if="errors.name" class="text-danger font-weight-bold">{{ errors.name }}</small>
                                </div>
                                <div class="">
                                    <label class="mt-3 font-weight-bold">Password</label>
                                    <input type="password" class="form-control" v-model="password">
                                    <small v-if="errors.password" class="text-danger font-weight-bold">{{ errors.password }}</small>
                                </div>
                                <div class="text-center">
                                    <button class="btn btn-primary mt-4 w-100" @click.prevent="submit">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {data} from '@/data'
export default {
    name: 'Loginpage',
    data(){
        return{
            name:'',
            password:'',
            errors:[],
        }
    },
    methods: {
        submit(){
            this.errors = [];
            var errorcount = 0;

            if(!this.name){
                this.errors.name='User Name is required';
                errorcount++;
            }
            if(!this.password){
                this.errors.password='Password is required';
                errorcount++;
            }

            if(errorcount > 0){
                // return false;
                console.log('error');
            } else {
                console.log('loggedIn');
                this.$store.commit('SET_RECIPE', data)
                this.$router.push( {
                    path: this.$route.query.redirect || '/dashboard'
                })
            }
        }
    },
}
</script>
<style scoped>
.bg1{
    background-color: greenyellow;
}
</style>