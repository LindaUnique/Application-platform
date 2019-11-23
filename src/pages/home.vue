<template>
    <div>
        <h1>login page</h1>
        <router-link to="/content">{{announcement}}</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            announcement: "click here"
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
