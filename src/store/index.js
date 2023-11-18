import { createStore } from "vuex";

const store = createStore ({
    state: {
        // 用于出差怒应用程序级别的状态
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