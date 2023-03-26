<template>

</template>

<script lang="ts" setup>
import './page.css';
import MyHeader from './Header.vue';

import { ref } from 'vue';

const user = ref<{ name: string } | null>(null)

const onLogin = () => {
  user.value = { name: 'Jane Doe' };
};
const onLogout = () => {
  user.value = null;
};
const onCreateAccount = () => {
  user.value = { name: 'Jane Doe' };
};

</script>
