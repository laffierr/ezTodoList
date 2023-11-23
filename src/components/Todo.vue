<template>
    <div class="todo"
    :class="{todo__selected: selected }">
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
                    <i :style="{ width: progress, backgroundImage:progressColor}"></i>
                </span>
                <span class="todo_progress_num">{{ progress }}</span>
            </div>

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

</template>

<script>
    import Task from './task.vue';
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
            progress() {
                const totalCount = this.todo.tasks.filter(t => !t.deleted).length
                const doneCount = this.todo.tasks.filter(t => !t.deleted && t.done).length
                return `${Math.round((doneCount / totalCount) * 100)}%`
            },
            progressColor() {
                const colorBottom = `color-stop(30%, ${this.todo.colors[0]})`
                const colorTop = `to(${this.todo.colors[1]})`
                return `-webkit-CanvasGradient(liner, left bottom, right bottom, ${colorBottom}, ${colorTop})`
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

        }
    }
</script>