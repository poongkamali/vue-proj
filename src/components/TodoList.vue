<template>
    <div class="bg">
        <div class="container">
            <div class="my-5">
                <div class="d-lg-flex justify-content-center">
                    <div class="w-75">
                        <form action="">
                            <h3 class="text-center pb-2">Schedule Your Meeting</h3>
                            <div v-if="!isEditing" class="alert alert-warning">
                                <div class="form-row">
                                    <div class="col-lg-6">
                                        <input type="text" placeholder="Meeting" v-model="task" class="form-control mt-3">
                                        <small v-if="errors.task" class="text-danger font-weight-bold">{{ errors.task }}</small>
                                    </div>
                                    <div class="col-lg-3">
                                        <input type="date" v-model="date" class="form-control mt-3">
                                        <small v-if="errors.date" class="text-danger font-weight-bold">{{ errors.date }}</small>
                                    </div>
                                    <div class="col-lg-2">
                                        <input type="time" v-model="time" class="form-control mt-3">
                                        <small v-if="errors.time" class="text-danger font-weight-bold">{{ errors.time }}</small>
                                    </div>
                                    <div class="col-lg-1">
                                        <button class="btn btn-warning mt-3" @click.prevent="storelist">Add</button>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="alert alert-warning">
                                <div class="form-row">
                                    <div class="col-lg-6">
                                        <input type="text" placeholder="Task" v-model="task" class="form-control mt-3">
                                    </div>
                                    <div class="col-lg-3">
                                        <input type="date" v-model="date" class="form-control mt-3">
                                    </div>
                                    <div class="col-lg-2">
                                        <input type="time" v-model="time" class="form-control mt-3">
                                    </div>
                                    <div class="col-lg-1">
                                        <button class="btn btn-warning mt-3" @click.prevent="updatelist">Update</button>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div class="mt-2 alert alert-primary py-1">Total ({{ lists.length }})</div>
                                <div class="mt-2 alert alert-success py-1">Completed ({{ completedlist.length }})</div>
                                <div class="mt-2 alert alert-danger py-1">Pending ({{ lists.length-completedlist.length }})</div>
                            </div>
                            <div class="text-right">
                                <button @click.prevent="clearCompleted" class="btn btn-danger mb-3">Clear Completed</button>
                            </div>
                            <div class="table-responsive">
                                <table class="table text-center">
                                    <tr class="alert alert-warning">
                                        <th>S.No</th>
                                        <th>Meeting</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    <TodoCom v-for="(list,index) in lists" :key="index" :list="list" :index="index" @ch-edit="editlist(index, list)" @ch-delete="deletelist(index)"  />
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TodoCom from './todocom'
export default {
    name: "TodoList",
    components:{
        TodoCom,
    },
    data(){
        return{
            isEditing: false,
            selectedIndex: null,
            task:'',
            date:'',
            time:'',
            errors:[],
            lists:[{
                task: 'General',
                date:'2021-11-16',
                time:'22:04',
                done: true
            },
            {
                task: 'Conference',
                date:'2021-11-17',
                time:'12:10',
                done: false
            } 
            ],
        }
    },
    computed:{
        completedlist(){
            return this.lists.filter(x => {if(x.done){
                return true
            }});
        }
    },
    methods: {
        storelist: function(){
            var errorcount = 0;
            this.errors = [];

            if(!this.task){
                this.errors.task='Task is required';
                errorcount++;
            }
            if(!this.date){
                this.errors.date='Date is required';
                errorcount++;
            }
            if(!this.time){
                this.errors.time='Time is required';
                errorcount++;
            }

            if(errorcount){
                alert('Opps! Some fields are missing');
            } else {
                this.lists.push({
                    task:this.task,
                    date:this.date,
                    time:this.time
                });
                this.task = "";
                this.date = "";
                this.time = "";
            }
        },
        editlist(index, list){
            this.task= list.task;
            this.date= list.date;
            this.time= list.time;
            this.selectedIndex = index;
            this.isEditing = true;
        },
        updatelist(){
            this.lists.splice(this.selectedIndex, 1,{
                task:this.task,
                date:this.date,
                time:this.time
            })
            this.task = "",
            this.date = "",
            this.time = "";
            this.isEditing = false;
        },
        deletelist(index){
            this.lists.splice(index, 1);
        },
        inProgress(list){
            return !this.isCompleted(list);
        },
        isCompleted(list){
            return list.done;
        },
        clearCompleted(){
            this.lists = this.lists.filter(this.inProgress);
        }
    },
}
</script>

<style>
    .done{
        text-decoration: line-through;
    }
</style>