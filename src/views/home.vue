<template>
    <div class="home">
        <app-bar title="TODO" left=bars right=search />
        <avatar />
        <gradient />
        <todo-list />
        <todo-detail />
    </div>

</template>

<script>
import AppBar from '../components/AppBar.vue'
import Avatar from '../components/Avatar.vue'
import Gradient from '../components/Gradient.vue';
import TodoList from '../components/TodoList.vue';
import TodoDetail from '../components/TodoDetail.vue';
export default {
    // name: Home,
    components: {
        AppBar,
        Avatar,
        Gradient,
        TodoList,
        TodoDetail,
    }
}
</script>

<style>
.home {
    /* position: relative; */
    height: 100%;
    width: 100%;
    /* background-color: q#fff; */
    overflow: hidden;
    color: #fff;
}

</style>