<template>
    <div>
        <router-link :to="{ name: 'home'}">Home</router-link>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: "Welcome",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>
