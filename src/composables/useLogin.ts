import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import type { ILoginRequest } from '@/models/login'
import loginApiCall from '@/apis/loginApiCall'
import notificationHelper from '@/libraries/notificationHelper'
import EnumMessageType from '@/models/enums/EnumMessageTypes'
import { appStore } from '@/stores'
import { useRouter } from 'vue-router'
export default function useLogin() {
    const ruleFormRef = ref<FormInstance>()
    const isLoading = ref<boolean>(false)
    const store = appStore();
    const router = useRouter();

    const requestForm = reactive<ILoginRequest>({
        Username: '',
        Password: '',
        IsAppUser: false,
        OnlineId: 0,
        WebId: 264,
        Ip: '163.47.15.15',
        Country: 'KH',
        Url: 'http://sbokh13.tswltry.com/login',
        Region: '12',
        City: 'Phnom Penh',
        Platform: '',
        Browser: 'chrome',
        Lang: 'en',
        SimulateId: 0,
        OperatorId: 0
    })
    const passwordValidate = (rule: any, value: any, callback: any) => {
        if (value === '') {
            callback(new Error('Required'));
        } else if (value.length < 6 || value.length > 20) {
            callback(new Error('Password must be 6-20 characters'));
        } else if (!/[a-zA-Z]/.test(value)) {
            callback(new Error('Password must include at least one letter'));
        } else if (!/[0-9]/.test(value)) {
            callback(new Error('Password must include at least one number'));
        } else {
            callback();
        }
    }
    const rules = reactive<FormRules<typeof requestForm>>({
        Username: [
            { required: true, message: "Required", trigger: 'blur' },
            { message: "Username must be 6-20 characters", min: 6, max: 20 }
        ],
        Password: [{ required: true, validator: passwordValidate, trigger: 'blur' }],
    })

    const onLogin = async () => {
        try {
            isLoading.value = true;
            const response = await loginApiCall.callLogin(requestForm);
            if (response.data.ErrorCode === 0) {
                notificationHelper.notification(response.data.Message, EnumMessageType.Success);
                store.onSaveToken(response.data.Data.Token);
                store.onSaveUserInfo(response.data.Data);
                router.push('/')
                setTimeout(() => { window.location.reload(); }, 1000)
            } else {
                notificationHelper.notification(response.data.Message, EnumMessageType.Error);
            }
        } catch (error) {
            console.error(error);
        } finally {
            isLoading.value = false;
        }
    }
    const onSubmitLogin = (formEl: FormInstance | undefined) => {
        if (!formEl) return
        formEl.validate((valid) => {
            if (valid) {
                onLogin()
            } else {
                console.log('error form')
            }
        })
    }
    return {
        isLoading,
        requestForm,
        rules,
        onSubmitLogin,
        ruleFormRef,
    }
}