<template>
    <div class="flex w-full min-h-screen justify-center items-center">
        <div
            class="login flex justify-between text-text2 p-4 w-[350px] md:w-[750px] lg:min-w-[1000px] h-[500px] bg-background2 transition-all ease-in-out shadow-2xl shadow-background2 rounded-md">
            <div class="w-[350px]  p-4 flex flex-col relative justify-center items-center">
                <div class=" absolute top-0 left-2 text-[32px] font-medium">Log In</div>
                <div class="w-[100px] h-auto">
                    <img class="w-full h-full object-cover" src="@/assets/images/login.png" alt="">
                </div>
                <!-- Login Field Form -->
                <slot />
                <div class="flex justify-between w-full mt-2">
                    <a href="#">Register</a>
                    <a href="#">Forgot Password ?</a>
                </div>
            </div>
            <div class="w-full md:flex gap-2 hidden flex-col items-center">
                <div class="text-[60px] font-medium">Welcome</div>
                <div class="w-[350px]">
                    <img class="w-full h-full object-cover hover:scale-125 transition-all ease-in-out"
                        src="@/assets/images/spider-man.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.login {
    .el-input__wrapper {
        background: var(--background2);
        border-radius: 15px;
        height: 32px;
        font-size: 12px;
    }

    label,
    a,
    .el-input__inner {
        color: var(--text2);
        font-size: 12px;
    }

    a:hover {
        text-decoration: underline;
        color: var(--link);
    }

    button {
        width: 100%;
        border-radius: 15px;
        height: 32px;
        font-size: 14px;
        background: #6c003d;
        border: none;

        &:hover {
            background: #84004b;
        }
    }
}
</style>