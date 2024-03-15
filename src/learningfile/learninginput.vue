<script setup>

import { ref } from 'vue'
const inputtingText = ref('')
function inputtingtexts(v) {
    inputtingText.value = v.target.value

}
const inputtingText2 = ref("")

</script>
<template>
    <div class="flexing">
        <div>
            <h1>
                this is the first method used through functioning!
                <input :value="inputtingText" @input="inputtingtexts">
                <h1>{{ inputtingText }}</h1>
            </h1>
        </div>
        <div>
            <h1>this method is used by using "v-model"</h1>
            <input type="text" v-model="inputtingText2" placeholder="type here">
            <h1>{{ inputtingText2 }}</h1>
        </div>
    </div>
    <h1 id="jquerytest">hello this is from jquery</h1>
</template>
<style scoped>
.flexing {
    display: flex;
}
</style>