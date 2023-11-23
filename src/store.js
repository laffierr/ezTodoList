import { createStore } from "vuex";

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
            ],
        }
        // 用于储存应用程序级别的状态
        
    },
    mutations: {
        // 用于修改状态的方法 接收state作为第一个参数 同步
    },
    actions: {
        // 用于处理异步操作或者包含业务逻辑的方法 接受一个与store实例具有相同方法和属性的上下文对象 可包含多个mutation调用
    },
    getters: {
        // 用于从state派生出一些状态，类似计算属性，接收state为第一个参数 只读state中的数据
        todayTasks(state) {
            return state.todayTasks || [];
        }
    },
    // modules: {
    //     // 将大型的Store拆分成多个模块
    // }
});

export default store;