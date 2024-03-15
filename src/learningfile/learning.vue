<script setup>
import{ref,reactive} from 'vue'
const counter=ref(0)
const changeColor=ref('turn-red')
function increment(){
    counter.value++
}
const message=ref('hello this is tharun')
</script>
<template>
    <h1 :class="changeColor">{{ message }}</h1>
    <h1>here is the counter:{{ counter }}</h1>
    <button @click="increment()">increase</button>
</template>
<style>
.turn-red{
    color: red;
}
</style>