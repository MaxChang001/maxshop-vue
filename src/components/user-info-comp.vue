<template>
    <div class="user-info-container">
        <h2 class="user-info-title">用户信息</h2>
        <div class="user-info-item">
            <label class="user-info-label">UserNo:</label>
            <span class="user-info-value">{{ userInfo.UserNo }}</span>
        </div>
        <div class="user-info-item" v-if="!isEditing">
            <label class="user-info-label">UserName:</label>
            <span class="user-info-value">{{ userInfo.UserName }}</span>
        </div>
        <div class="user-info-item" v-if="isEditing">
            <label class="user-info-label">UserName:</label>
            <input class="user-info-value" v-model="editedUserInfo.UserName" />
        </div>
        <div class="user-info-item" v-if="!isEditing">
            <label class="user-info-label">Email:</label>
            <span class="user-info-value">{{ userInfo.Email }}</span>
        </div>
        <div class="user-info-item" v-if="isEditing">
            <label class="user-info-label">Email:</label>
            <input class="user-info-value" v-model="editedUserInfo.Email" />
        </div>
        <button v-if="!isEditing" @click="isEditing = true">编辑</button>
        <button v-if="isEditing" @click="saveUserInfo">保存</button>
    </div>
</template>

<script>
export default {
    name: 'UserInfo',
    props: {
        userInfo: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isEditing: false,
            editedUserInfo: {
                UserName: this.userInfo.UserName,
                Email: this.userInfo.Email,
                UserNo: this.userInfo.UserNo
            }
        }
    },
    methods: {
        saveUserInfo() {
            this.$emit('save-user-info', this.editedUserInfo);
            this.isEditing = false;
        }
    }
}
</script>

<style>
.user-info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
}

.user-info-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.user-info-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.user-info-label {
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
}

.user-info-value {
    font-size: 18px;
}
</style>

