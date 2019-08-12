import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    //定义状态
    state: {
        currentUser: null,
        isLogin: false,
        userId: "",
        userImage: null,
    },
    getters: {
        currentUser: state => state.currentUser,
        userImage: state => state.userImage,
        userId: state => state.userId,
        isLogin: state => state.isLogin,
    },
    mutations: {
        userStatus: (state, user) => {
            if (user) {
                state.currentUser = user;
                state.isLogin = true
            } else if (user == null) {
                //登出的时候，清空sessionStorage里的东西
                sessionStorage.setItem("userName", null);
                sessionStorage.setItem("userImage", null);
                sessionStorage.setItem("userId", null);
                state.currentUser = null;
                state.isLogin = false;
                state.userImage = null;
            }
        },
        userImageGet: (state, imageUrl) => {
            if (imageUrl) {
                state.userImage = imageUrl;
            } else if (imageUrl == null) {
                state.userImage = null;
            }
        },
        userIdGet: (state, userId) => {
            if (userId) {
                state.userId = userId;
            } else if (userId == null) {
                state.userId = null;
            }
        },
    },
    actions: {
        //应用mutation
        setUser: ({ commit }, user) => {
            commit("userStatus", user)
        },
        //获取用户头像
        setImage: ({ commit }, imageUrl) => {
            commit("userImageGet", imageUrl)
        },
        setUserId: ({ commit }, userId) => {
            commit("userIdGet", userId)
        }
    }
})

export default store