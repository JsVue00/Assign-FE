<template>
    <AuthForm>
        <el-form ref="ruleFormRef" style="min-width: 300px" label-position="top" :model="requestForm" status-icon
            :rules="rules" class="space-y-8">
            <el-form-item label="Username" prop="Username">
                <el-input v-model="requestForm.Username" type="text" placeholder="Enter username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Password" prop="Password">
                <el-input v-model="requestForm.Password" type="password" placeholder="Enter password"
                    autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button :loading="isLoading" type="primary" @click="onSubmitLogin(ruleFormRef)">
                    Log In
                </el-button>
            </el-form-item>
        </el-form>
    </AuthForm>
</template>
<script lang="ts" setup>
import AuthForm from "@/components/AuthForm.vue"
import useLogin from "@/composables/useLogin";

const {
    isLoading,
    requestForm,
    rules,
    onSubmitLogin,
    ruleFormRef,

} = useLogin();
</script>