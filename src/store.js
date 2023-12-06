// import Vue from 'vue';
// import Vuex from 'vuex';
import { createStore } from "vuex";
import {tomorrow} from './shared';

// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex)

const store = createStore ({
    state() {
        return {
            currentIndex: 0,
            todos: [
                {
                    icon: 'user',
                    name: 'Personal',
                    tasks: [
                    {
                        id: 1,
                        title: 'Dating',
                        date: new Date(),
                        done: false,
                        deleted: false
                    }
                    ],
                    colors: ['#ff6262', '#ffa947']
                },
                {
                    icon: 'suitcase',
                    name: 'Work',
                    tasks: [
                    {
                        id: 3,
                        title: 'Design Sprint',
                        date: new Date(),
                        done: true,
                        deleted: false
                    },
                    {
                        id: 4,
                        title: 'Icon Set Design for Mobile App',
                        date: new Date(),
                        done: false,
                        deleted: false
                    },
                    ],
                    colors: ['#5b9df9', '#47bfff']
                },
                {
                    icon: 'home',
                    name: 'Home',
                    tasks: [
                      {
                        id: 2,
                        title: 'House Keeping',
                        date: new Date(),
                        done: true,
                        deleted: false
                      }
                    ],
                    colors: ['#2c7d59', '#3ba776']
                },
            ],
            selected: null,
            unselect: null,
            editing: null
        }
        // 用于储存应用程序级别的状态
    },
    mutations: {
        // 用于修改状态的方法 接收state作为第一个参数 同步
        selectTodo (state, selected) {
            state.unselect = null
            state.selected = selected
        },
        unselectTodo (state) {
            state.unselect = state.selected
            state.selected = null
        },
        nextTodo (state) {
            if (state.currentIndex < state.todos.length - 1) {
                state.currentIndex++
            }
        },
        prevTodo (state) {
            if (state.currentIndex > 0) {
                state.currentIndex--
            }
        },
        deleteTask (_, {task}) {
            task.deleted = true
        },
        toggleEditing (state) {
            if (state.editing && state.editing.text) {
                state.selected.todo.tasks.unshift({
                    title: state.editing.text,
                    date: new Date(),
                    done: false,
                    delete: false
                })
            }
            state.editing = state.editing ? null : {text: ''}
        }
    },
    actions: {
        // 用于处理异步操作或者包含业务逻辑的方法 接受一个与store实例具有相同方法和属性的上下文对象 可包含多个mutation调用
    },
    getters: {
        // 用于从state派生出一些状态，类似计算属性，接收state为第一个参数 只读state中的数据
        todayTasks(state) {
            // return state.todayTasks || [];
            const tasks = []
            state.todos.forEach( todo => {
                todo.tasks.forEach(task => {
                    if (task.date <= tomorrow && !task.done && !task.deleted) {
                        tasks.push(task)
                    }
                })
            })
            return tasks
        },
        currentTodo (state) {
            return state.todos[state,currentIndex]
        },
    },
    // modules: {
    //     // 将大型的Store拆分成多个模块
    // }
});

export default store;