<template>
  <transition name="show" @enter="handleEnter" @leave="handleLeave">
    <div class="todo-detail" v-if="selected">
      <app-bar @left="unselectTodo"/>
      <todo :todo="selected.todo"/>
    </div>
  </transition>
</template>

<script>
  import { mapState, mapMutations} from 'vuex';
  import AppBar from './AppBar.vue';
  import Todo from './Todo.vue';

  export default {
    components: {
      AppBar,
      Todo
    },
    computed: {
      ...mapState(['selected','unselected'])
    },
    methods: {
      ...mapMutations(['unselectTodo']),
      handleEnter (el) {
        Object.assign(el.style, {
          top: `${this.selected.rect.top}px`,
          left: `${this.selected.rect.left}px`,
          width: `${this.selected.rect.width}px`,
          height: `${this.selected.rect.height}px`,
        })

        setTimeout(() => {
          Object.assign(el.style, {
            top: 0,
            left: 0,
            width: `${this.selected.rect.appWidth}px`,
            height: `${this.selected.rect.appHeight}px`
          })
        }, 0);
      },
      handleLeave(el) {
        Object.assign(el.style, {
          top: 0,
          left: 0,
          width: `${this.selected.rect.appWidth}px`,
          height: `${this.selected.rect.appHeight}px`
        })

        setTimeout(() => {
          Object.assign(el.style, {
            top: `${this.selected.rect.top}px`,
            left: `${this.selected.rect.left}px`,
            width: `${this.selected.rect.width}px`,
            height: `${this.selected.rect.height}px`,
          })
        });
      }
    }
  }
</script>

<style lang="scss">
.todo-detail {
  position: fixed;
  display: flex;
  flex-direction: column;
  border-radius: 0;
  background-color: #fff;
  color: #666;
  will-change: top,left,width,height;

  .todo {
    margin: 0;
    margin-top: -44px;
    padding: 0 20px;
    box-shadow: none;
  }
}
</style>