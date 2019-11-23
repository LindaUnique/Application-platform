<template>
    <div>
        <h1>content page</h1>
        <!-- <label>{{names}}</label> -->
        <div class="nav-list">
            <router-link class="nav-item" to="/">index</router-link>
            <router-link class="nav-item" to="/content">content page</router-link>
            <router-link class="nav-item" to="/user">user center</router-link>
        </div>

        <div class="main">
            <ul>
                <li><router-link :to="{name:'welcome'}">content home</router-link></li>
                <li><router-link :to="{name:'buying'}">content buying</router-link></li>
                <li><router-link :to="{name:'selling'}">content selling</router-link></li>
            </ul>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            names: "content"
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
