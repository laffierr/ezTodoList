<template>
    <div class="gradient">
        <GradientColor v-for="(todo,index) in todos" 
        :key="todo.name" 
        :colors="todo.colors" 
        :active="index <= currentIndex" 
        >
        </GradientColor>
    </div>
</template>

<script>
    import GradientColor from './GradientColor.vue';
    import { mapState } from 'vuex';
    export default {
        components: {
            GradientColor
        },
        computed: {
            ...mapState(['todos','currentIndex'])
        },
        created() {
            // for ( let todo of this.todos ) {
            //     console.log(todo.name);
            // }
        }
    }
</script>

<style lang="scss">
    .gradient {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        // background: #000;
    }
</style>