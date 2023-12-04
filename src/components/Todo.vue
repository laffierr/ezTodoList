<template>
    <div class="todo" :class="{todo__selected: selected }">
        <div class="todo_head" @click="handleClick">
            <div class="todo_icon" :style="{color}">
                <i :class="['fa',`fa-${todo.icon}`]"></i>
            </div>
            <div class="todo_menu">
                <i class="fa fa-ellipsis-v"></i>
            </div>
        </div>
        <div class="todo_body">
            <p class="todo_tips">{{ todo.tasks.length }} Tasks</p>
            <h3 class="todo_title"> {{ todo.name }}</h3>
            <div class="todo_progress">
                <span class="todo_progress_line">
                    <i :style="{ width: progress, backgroundImage:`url(${progressColor})`}"></i>
                </span>
                <span class="todo_progress_num">{{ progress }}</span>
            </div>
            <div class="todo_tasks">
                <h4 class="todo_subtitle" v-if="todayTasks.length">Today</h4>
                <ul>
                    <li v-for="task in todayTasks"
                    :key="task.id">
                    <task :task="task"/>
                    </li>
                </ul>
                <h4 class="todo_subtitle" v-if="tomorrowTasks.length">Tomorrow</h4>
                <ul>
                    <li v-for="task in tomorrowTasks"
                    :key="task.id">
                    <task :task="task"/>
                    </li>
                </ul>
                <h4 class="todo_subtitle" v-if="outdatedTasks.length">Outdated</h4>
                <ul>
                    <li v-for="task in outdatedTasks"
                    :key="task.id">
                    <task :task="task"/>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>

</template>

<script>
    import Task from './Task.vue';
    import { today, tomorrow} from '../shared.js';
    export default{
        components: {
            Task,
        },
        props: {
            todo: {
                type: Object,
                required:true
            },
            selected:{ 
                type: Boolean,
            },
        },
        computed: {
            color() {
                return this.todo.colors[0];
            },
            // 进度计算函数
            progress() {
                const totalCount = this.todo.tasks.filter(t => !t.deleted).length
                const doneCount = this.todo.tasks.filter(t => !t.deleted && t.done).length
                return `${Math.round((doneCount / totalCount) * 100)}%`
            },
            progressColor() {
                const colorLeft = `color-stop(30%, ${this.todo.colors[0]})`
                const colorRight = `to(${this.todo.colors[1]})`
                console.log(`-webkit-linear-gradient(left bottom, right bottom, ${colorLeft}, ${colorRight})`);
                return `-webkit-gradient(liner, left bottom, right bottom, ${colorLeft}, ${colorRight})`
                // return `-webkit-linear-gradient(left bottom, right bottom, ${colorLeft}, ${colorRight})`
            },
            todayTasks() {
                return this.todo.tasks.filter(task => {
                    return task.date >=today && task.date < tomorrow
                })
            },
            tomorrowTasks() {
                return this.todo.tasks.filter(task => {
                    return task.date >= tomorrow
                })
            },
            outdatedTasks() {
                return this.todo.tasks.filter(task => {
                    return task.date <= today
                })
            },
        },
        methods: {
            handleClick() {
                const appRect = document.querySelector('#app').getBoundingClientRect()
                const elRect = this.$el.getBoundingClientRect()
                const todo = this.todo
                const rect = {}

                rect.top = elRect.top - appRect.top
                rect.left = elRect.left - appRect.left
                rect.width = elRect.width
                rect.height = elRect.height
                rect.appWidth = appRect.width
                rect.appHeight = appRect.height

                this.$emit('select', {rect, todo})
            }
        }
    }
</script>

<style lang="scss">
    .todo {
        // 这个flex跨越了组件，和todoList里的flex对应
        flex: 1;
        margin: 0 8px;
        overflow: hidden;
        box-shadow: 0 10px 10px rgba($color: #fff, $alpha: 0.2);
        color: #666;
    }
    .todo__selected {
        visibility: hidden;
    }
    .todo_head {
        display: flex;
        padding: 20px;
        height: 44px;
        justify-content: space-between;
        align-items: flex-start;

        // 性能优化：
        transform: translate3d(0, 0, 0);
        // 这一行设置了元素的3D变换，使用translate3d函数将元素在三个轴上进行平移。具体来说，这里的参数是(0, 0, 0)，表示在X轴、Y轴和Z轴上都不进行平移，即元素保持当前位置不变。虽然这看起来似乎没有实际的平移效果，但这样的变换可能会触发GPU加速，提高动画性能。
        
        will-change: transform;
        // 这一行是一个性能优化的声明，告诉浏览器该元素将要发生变换，以便浏览器可以提前做好一些优化工作。在这里，它指定了transform属性，表示元素的变换将会发生变化。这样一来，浏览器可能会为该元素创建一个独立的图层，以便更高效地处理变换，从而提高性能。
        
        .todo_icon {
            // 为了让icon在中间
            display: flex;

            width: 44px;
            height: 44px;
            border: 1px solid #eee;
            border-radius: 100%;
            justify-content: center;
            align-items: center;
            font-size: 18px;
        }
        .todo_menu {
            color: #eee;
        }
    }
    .todo_body {
        padding: 0 20px;
        transform: translate3d(0, 189px, 0);
        will-change: transform;
        .todo_tips {
            opacity: 0.6;
            font-size: 13px;
            font-weight: 600;
        }
        .todo_title {
            margin-top: 6px;
            font-size: 32px;
        }
        .todo_progress {
            display: flex;
            align-items: center;
            margin-top: 30px;

            .todo_progress_line {
                margin-right: 10px;
                flex: 1;
                height: 3px;
                background-color: #eee;

                i {
                    display: block;
                    height: 100%;
                    transition: all 0.3s ease;
                }
            }
            .todo_progress_num {
                font-size: 12px;
            }
        }
    }
    .todo_tasks {
        opacity: 0;
        transform: scale3d(1,0,1);
        // 对元素进行3d缩放变换
        // X轴上的缩放比例是1，表示在X轴方向上不进行缩放。
        // Y轴上的缩放比例是0，表示在Y轴方向上完全缩放为0，即元素在Y轴方向上消失。
        // Z轴上的缩放比例是1，表示在Z轴方向上不进行缩放
        
        .todo_subtitle {
            margin-top: 32px;
            margin-bottom: 8px;
            color: #999;
        }
    }

</style>