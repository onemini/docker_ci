<template>
  <div>登录页</div>
  <div>{{ mainStore.name }} {{ mainStore.nameLength }}</div>
  <van-button type="primary" @click="updatedName">修改store中的name</van-button>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/main'

const mainStore = useMainStore()

const updatedName = () => {
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了',
  })
}
</script>

<style lang="scss" scoped></style>
