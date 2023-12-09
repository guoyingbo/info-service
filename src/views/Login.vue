<template>
    <div class="d-flex flex-column" style="height:100vh;">
        <div class="page page-center">
            <div class="container container-normal py-4">
                <div class="row align-items-center g-4">
                    <div class="col-lg">
                        <div class="container-tight">
                            <div class="text-center mb-4">
                                <div class="login_title">Info Service</div>
                                <div class="login_title1">信息服务系统</div>
                            </div>
                            <div class="card card-md">
                                <div class="card-body">
                                    <h2 class="h2 text-center mb-4">登陆您的账户</h2>
                                    <form>
                                        <div class="mb-3">
                                            <label class="form-label">用户名</label>
                                            <input type="text" v-model="refUsername" class="form-control"
                                                placeholder="请输入用户名" autocomplete="off">
                                        </div>
                                        <div class="mb-2">
                                            <label class="form-label">
                                                密码
                                            </label>
                                            <div class="input-group input-group-flat">
                                                <input :type="showPassword ? 'text' : 'password'" class="form-control"
                                                    v-model="refPassword" placeholder="输入密码" autocomplete="off">
                                                <span class="input-group-text">
                                                    <div class="link-secondary button-cursor" @click="clickEye">
                                                        <IconEye v-if="showPassword" :size="24" stroke-width="1" />
                                                        <IconEyeClosed v-else :size="24" stroke-width="1" />
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="mb-2">
                                            <label class="form-check">
                                                <input type="checkbox" class="form-check-input">
                                                <span class="form-check-label">此设备记住我</span>
                                            </label>
                                        </div>
                                        <div class="form-footer">
                                            <div class="btn btn-primary w-100" @click="clickLogin">
                                                <el-icon class="is-loading" v-if="isVerifying" size="large"
                                                    style="margin-right:4px">
                                                    <Loading />
                                                </el-icon> 登录
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <div class="text-center text-secondary mt-3">
                                Copyright 2022 ©RTQA
                            </div>
                        </div>
                    </div>
                    <div class="col-lg d-none d-lg-block">
                        <img :src="login_pdn" height="300" class="d-block mx-auto" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import login_pdn from '../static/undraw_secure_login_pdn4.svg'
import { IconEye, IconEyeClosed, IconLoader } from '@tabler/icons-vue'
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Loading } from '@element-plus/icons-vue'
const showPassword = ref(false);

const isVerifying = ref(false);
const refUsername = ref();
const refPassword = ref();
const clickEye = () => {
    showPassword.value = !showPassword.value;
}

const clickLogin = () => {

    if (!refUsername.value || !refPassword.value) {
        ElMessageBox.alert('请输入用户名和密码', '提醒', {
            // if you want to disable its autofocus
            // autofocus: false,
            confirmButtonText: '确定',
            type: 'warning',

        })
        return;
    }

    isVerifying.value = true;
    setTimeout(() => {
        ElMessageBox.alert('用户名或密码错误', '错误', {
            // if you want to disable its autofocus
            // autofocus: false,
            confirmButtonText: '确定',
            type: 'error',

        })
        isVerifying.value = false;
    }, 600);

}

</script>