<template>
    <div class="root">
        <h1 id="title">login page</h1>
        <el-button type="primary" icon="el-icon-edit"></el-button>
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
<style lang="stylus">
.root #title
    color: #ccc
</style>
