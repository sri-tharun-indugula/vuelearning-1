<script setup>
import{ref}from 'vue'
let id=1
let showtheWork=true
const inputdata=ref('')
const todoList=ref([
    {id:id++,todo:'learn angular',done:true},
    {id:id++,todo:'learn react',done:true},
    {id:id++,todo:'learn vue',done:false}

])
function deletetodo(v){
    todoList.value.forEach((element,i) => {
        if(v==element.id){
            todoList.value.splice(i,1)
        }
        if(todoList.value.length==0){
            id=1
        } 
    });
}
function edittodo(v){
    console.log('triggered',v)
    todoList.value.forEach((value)=>{
        if(v==value.id){
            inputdata.value=value.todo
        }
    })
}
function addtodos(){
    todoList.value.push({id:id++,todo:inputdata.value})
    inputdata.value=''
    console.log(todoList)
}

function showwork(){
    console.log('triggered 37')
    if(showtheWork){
        console.log('triggered 39')
        todoList.value.filter((v)=>{return v.done==true})
    }else{
        console.log('triggered 42 else')
        todoList.value.filter((v)=> {return !(v.done==true)})
    }
    showtheWork=!showtheWork
}

</script>
<template>
    <input type="text" v-model="inputdata">
    <button @click="addtodos">add</button>
    <div v-for="todos of todoList">
        <input type="checkbox" v-model="todos.done">
            <li :class="{ crossed:todos.done }"><span>{{todos.id}}</span>{{ todos.todo }}</li>
            <button @click="edittodo(todos.id)">edit</button>
        <button @click="deletetodo(todos.id)">delete</button>
    </div>
    <button @click="showwork" v-if="showtheWork">show the done tasks</button>
    <button @click="showwork" v-else>dont show the done tasks</button>
</template>
<style scoped>
.crossed{
    text-decoration-line: line-through;
}
</style>