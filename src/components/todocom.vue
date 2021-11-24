<template>
    <tr>
        <td :class="{ done: list.done }" class="pt-3">{{ index+1 }}</td>
        <td :class="{ done: list.done }" class="pt-3">{{ list.task }}</td>
        <td :class="{ done: list.done }" class="pt-3">{{ list.date }}</td>
        <td :class="{ done: list.done }" class="pt-3">{{ list.time }}</td>
        <td class="pt-3"><input type="checkbox" v-model="list.done"> <span v-if="list.done" class="text-success todo-status font-weight-bold">Completed</span><span v-else class="text-danger todo-status font-weight-bold">Pending</span>
        </td>
        <td>
            <button @click.prevent="edit" class="btn btn-primary mr-3"><i class="fas fa-edit"></i></button>
            <button v-if="list.done" @click.prevent="deletelist" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'TodoCom',
    props: [
        'list','index'
    ],
    methods: {
        edit(){
            this.$emit('ch-edit');
        },
        deletelist(){
            this.$emit('ch-delete')
        }
    },
}
</script>