<template>
    <div class="home"></div>
    <AppBar title="TODO" left=bars right=search />
    <Avatar />
    <gradient />
</template>

<script>
import AppBar from '../components/AppBar.vue'
import Avatar from '../components/Avatar.vue'
import Gradient from '../components/Gradient.vue';
export default {
    // name: Home,
    components: {
        AppBar,
        Avatar,
        Gradient,
    }
}
</script>

<style>
.home {
    height: 100%;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
}

</style>