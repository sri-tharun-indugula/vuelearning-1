<script setup>
import{ref} from 'vue'
const boolean1=ref(true)
function toogle(){
    boolean1.value=!boolean1.value

}
</script>
<template>
    <div>
        <div>
            <h1>click here for toggle method-1</h1>
            <div>
                <button @click="toogle">click here</button>
            </div>
            <h1 v-if="boolean1">i am in if condition</h1>
            <h1 v-else>i am in else condtion</h1>
        </div>
    </div>
</template>
<style scoped>
</style>