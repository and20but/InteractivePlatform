<template>
    <div class="header-box">
        <div class="header__row">
            <img src="../../assets/images/logo.png" alt="">
            <div class="navs">
                <nav>
                    <div class="nav-item" v-for="route in constantRoutes[0].children" :key="route.path"
                        @click="handleRouter(route.name)">
                        {{ route.meta.title }}
                    </div>
                </nav>
                <div class="login" >
                    <span @click="userStore.openLoginBox"
                    v-if="!userStore.isLogin">登录 ｜ 注册</span>
                    <span v-else
                    @click="handleRouter('user-info')"
                    >个人信息 | 退出</span>
                </div>
            </div>
        </div>
        <LoginBox></LoginBox>
    </div>
</template>



<script setup>
import { onMounted } from 'vue';
import { constantRoutes } from '../../router/routes';
import { useRouter } from 'vue-router';
import LoginBox from '../../components/LoginBox.vue';
import useUserStore from '@/store/modules/useUserStore'

const userStore = useUserStore()
const router = useRouter()


const handleRouter = (name) => {
    router.push({ name })
}


onMounted(() => {
    // console.log(constantRoutes)
})

</script>


<style scoped lang="scss">
.header-box {
    width: 100%;
    height: $layout-header-height;
    border-bottom: .0167rem solid $layout-border-color;
    font-size: .25rem;
    position: fixed;
    z-index: 10000;
    background-color: white;

    .header__row {
        width: 80%;
        height: 100%;
        margin: 0 auto;
        padding: .0833rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
            height: 80%;
        }

        .navs {
            height: 100%;
            display: flex;
            align-items: center;

            nav {
                display: flex;
                font-size: 0.2rem;
                height: 100%;

                .nav-item {
                    padding: 0 .167rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                }
            }
        }

        .login {
            font-size: 0.19rem;
            margin-left: .5rem;
            color: rgba(137, 137, 137, 0.798);
            cursor: pointer;
            transition: all .3s;
            &:hover {
                color: grey;
            }
        }
    }
}
</style>