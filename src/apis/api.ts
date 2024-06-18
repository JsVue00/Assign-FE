import axios from 'axios';
import { appStore } from '@/stores';

const { Token } = appStore();
export const api = axios.create({
    baseURL: "http://coloris-stg.remotes.local",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Token}`,
    }
})