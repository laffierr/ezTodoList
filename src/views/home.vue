<template>
    <div class="home">
        <AppBar title="TODO" left=bars right=search />
        <Avatar />
        <Gradient />
        <TodoList />
    </div>

</template>

<script>
import AppBar from '../components/AppBar.vue'
import Avatar from '../components/Avatar.vue'
import Gradient from '../components/Gradient.vue';
import TodoList from '../components/TodoList.vue';
export default {
    // name: Home,
    components: {
        AppBar,
        Avatar,
        Gradient,
        TodoList,
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