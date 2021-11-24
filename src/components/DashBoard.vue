<template>
    <div class="bg1 pb-2">
        <nav class="navbar navbar-expand-md fixed-top bg-dark navbar-dark">
            <div class="container">
                <!-- Brand -->
                <a class="navbar-brand font-weight-bold border px-3 bg1 rounded-circle" href="#"><h3 class="text-dark"><span class="text-danger">S</span>pice</h3></a>

                <!-- Toggler/collapsibe Button -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Navbar links -->
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav ml-auto font-weight-bold">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Logout</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="my-5 pt-5">
                <h1 class="pb-3"><span class="text-danger">S</span>PICY <span class="text-danger">C</span>HICKEN <span class="text-danger">R</span>ECIPES</h1>
                <h5 class="pb-4">Welcome to spice, in this site you can explore spicy chicken recipes and you can add your spicy recipes too.</h5>
                <div class="text-right mb-3">
                    <span class="font-weight-bold">Add Your Spicy Recipes</span> <router-link to="/add"><button class="btn btn-success mr-3"><i class="fas fa-plus"></i></button></router-link>
                </div>
                <div class="row mx-auto">
                    <div class="col-sm-6 col-lg-4 mb-4" v-for="(recipe,index) in getdata" :key="index">
                        <div>
                            <div class="card overlay">
                                <div class="d-flex justify-content-between link">
                                    <span @click.prevent="edit(index, recipe)" v-if="disabled || recipe.isEditing"><i class="fas fa-pen p-3 text-white icon primary"></i></span>
                                    <span @click.prevent="del(index)"><i class="fas fa-times p-3 text-white icon danger"></i></span>
                                </div>
                                <img class="card-img-top" src="../assets/card1.jpg" alt="Card image cap">
                                <div class="card-body">
                                    <input v-if="recipe.isEditing" type="text" v-model="title" class="form-control">
                                    <h5 v-else class="card-title">{{ recipe.title }}</h5>
                                    <h6>(3.5)
                                        <i class="fas fa-star star"></i>
                                        <i class="fas fa-star star"></i>
                                        <i class="fas fa-star star"></i>
                                        <i class="fas fa-star-half-alt star"></i>
                                        <i class="far fa-star star"></i>
                                    </h6>
                                    <div class="card-text" v-if="recipe.isEditing">
                                        <textarea v-model="descripsion" class="form-control" cols="30" rows="10"></textarea>
                                        <div class="text-center">
                                            <button class="btn btn-info mt-3" @click.prevent="update">Update</button>
                                        </div>
                                    </div>
                                    <div v-else class="card-text">
                                        <span v-if="!recipe.readMoreActivated">{{ recipe.descripsion.slice(0, 190)}}</span>
                                        <a class="" v-if="!recipe.readMoreActivated" @click.prevent="activateReadMore(index)" href="#">
                                        Read More
                                        </a>
                                        <span v-if="recipe.readMoreActivated" v-html="recipe.descripsion"></span>
                                        <a class="" v-if="recipe.readMoreActivated" @click.prevent="activateReadLess(index)" href="#">
                                        Read Less
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
        <footer class="text-center">
            <p class="font-weight-bold">&copy; copyright 2019-2021</p>
        </footer>
    </div>
</template>
<script>
export default {
    name: 'DashBoard',
    data(){
        return {
            selectedIndex: null,
            isEditing: false,
            title:'',
            descripsion:'',
            disabled: true,
            readMoreActivated: false,
        }
    },
    computed:{
        getdata(){
            return this.$store.getters.getrecipe
        },
        // isDisabled() {
        //     // if something
        //     return false;
        // }
    },
    methods: {
        activateReadMore(index){
            this.getdata[index].readMoreActivated = true;
        },
        activateReadLess(index){
            this.getdata[index].readMoreActivated = false;
        },
        edit(index, recipe){
            this.title= recipe.title;
            this.descripsion= recipe.descripsion;
            this.selectedIndex = index;
            recipe.isEditing = true;
            this.disabled = false
        },
        update(){
            let updatedata = this.$store.getters.getrecipe;
            updatedata.splice(this.selectedIndex, 1,{
                isEditing: false,
                title:this.title,
                descripsion:this.descripsion,
                readMoreActivated: false,
            })
            this.$store.commit('SET_RECIPE', updatedata)
            this.title = ''
            this.descripsion = ''   
            this.disabled = true         
        },
        del(index){
            let deletedata = this.$store.getters.getrecipe;
            deletedata.splice(index, 1)
            this.$store.commit('SET_RECIPE', deletedata)
            // this.deletedata.splice(index, 1);
        },
    }
}
</script>
<style scoped>
.bg1{
    background-color: greenyellow;
}
.star {
    color: yellow;
}
.overlay{
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.link{
    background: rgba(0,0,0,0.5);
    opacity: 0;
    left: 0;
    right: 0;
    top: 1px;
    z-index: 3;
    position: absolute;
    transition: all ease-in-out 0.3s;
    display: flex;
    justify-content: center;
}
.icon {
    font-size: 20px;
}
.overlay:hover .link{
    opacity: 1;
    top: 0;
}
.primary:hover {
    color: blue !important;
}
.danger:hover {
    color: red !important;
}
</style>