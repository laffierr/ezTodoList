<template>
    <div class="avatar" :class="{avatar__selected: !!selected}">
        <div class="avatar_face">
            <img src="../assets/imgs/1.jpg">
        </div>
        <h2 class="avatar_name">早上好，wyz</h2>
        <p class="avatar_tips">
            It looks like you have a cozy time,<br /> You have {{ todayTasks.length }} tasks to do today
        </p>
        <p class="avatar_date">
            <!-- Today : {{ formattedDate(today) }} -->
            Today : {{ today }}
        </p>
    </div>
</template>

<script>
import { callWithAsyncErrorHandling } from 'vue';
import { mapState, mapGetters} from 'vuex'
export default {
    // name: Avatar,
    components: {

    },
    data() {
        return {
            today: new Date(),
        }
    },
    computed: {
        ...mapState(['selected']),
        ...mapGetters(['todayTasks']),
        // formattedDate(date) {
        //     console.log(date);
        //     let todayDate = new Date(date);
        //     return todayDate.toDateString().toUpperCase().replace(/{\s\d(4)}$/,',$1')
        // },
    },
}
</script>

<style lang="scss">
    .avatar {
        display: flex;
        padding: 0 40px;
        height: 300px;
        justify-content: flex-end;
        flex-direction: column;
        transition: all 0.5s ease;
    }
    .avatar__selected{
        transform: translate3d( 0, 20px, 0);
        opacity: 0;
    }
    .avatar_face {
        width: 44px;
        height: 44px;
        border-radius: 100%;
        overflow: hidden;
        box-shadow: 0 5px 10px rgba(0,0,0,0.2);
        img {
            display: block;
            height: 100%;
            width: 100%;
        }
    }
    .avatar_name {
        margin-top: 32px;
        padding: 0 6px;
        font-size: 32px;
        letter-spacing: 1px;
        font-weight: 300;
    }
    .avatar_tips {
        margin-top: 16px;
        padding: 0 6px;
        font-size: 13px;
        font-weight: 100;
        opacity: 0.8;
        line-height: 1.6em;
    }
    .avatar_date {
        margin-top: 44px;
        margin-bottom: 16px;
        padding: 0 6px;
        font-size: 14px;
    }

</style>