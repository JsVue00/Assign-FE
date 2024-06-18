import type { IloginResponse } from '@/models/login';
import { defineStore } from 'pinia'
import { ref } from 'vue';

export const appStore = defineStore('app', {
    state: () => {
        return {
            Token: ref<string>(''),
            userInfo: ref<IloginResponse>()
        }
    },
    actions: {
        onSaveToken(value: string) {
            this.Token = value;
        },
        onSaveUserInfo(value: IloginResponse) {
            this.userInfo = value;
        },
        onLogOut() {
            localStorage.clear();
            setTimeout(() => { window.location.reload(); }, 1000)
        }
    },
    getters: {
        getToken(state) {
            return state.Token;
        },
        getUserInfo(state) {
            return state.userInfo;
        }
    },

    persist: true
});
