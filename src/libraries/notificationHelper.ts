import type EnumMessageType from '@/models/enums/EnumMessageTypes'
import { ElNotification } from 'element-plus'

const notification = (message: string, type: EnumMessageType) => {
    ElNotification({
        message,
        type
    })
}

export default {
    notification
}