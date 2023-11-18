<template>
    <div class="app-bar">
        <span class="app-bar-l" @click="$emit('left')">
            <i :class="['fa',`fa-${left}`]"></i>
            <!-- 也可以不写[]用下面的形式写 -->
            <!-- <i :class="'fa fa-' + left"></i> -->
        </span>
        <h1>{{ title }}</h1>
        <span class="app-bar-r" @click="$emit('right')">
            <i :class="['fa',`fa-${right}`]"></i>
        </span>
    </div>
    <!-- 同样是用组件创建topbar，这样可以动态绑定类名 -->
</template>

<script>
    import '@fortawesome/fontawesome-free/css/all.css';
    export default {
        // name:AppBar,
        components: {

        },
        props: {
            title: {
                type:String,
                default:''
            },
            left: {
                type:String,
                default:'chevron-left'
            },
            right: {
                type: String,
                default:'ellipsis-v'
            }
        }
    }
</script>

<style lang="scss">
.app-bar {
    display: flex;
    align-items: center;
    height: 44px;
    font-size: 15px;
    z-index: 1;
    h1 {
        display: flex;
        justify-content: center;
        flex: 1;
    }
    span {
        padding: 0 20px;
    }
}
</style>