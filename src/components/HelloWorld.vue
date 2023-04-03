<!--
 * @Author: chenxing
 * @Date: 2023-04-03 10:36:20
 * @LastEditTime: 2023-04-03 11:51:21
 * @LastEditors: chenxing m17817095394@163.com
 * @Description: 
-->
<template>
	<h1>{{ msg }}</h1>

	<div class="card">
		<button type="button" @click="count++">count is {{ count }}</button>
		<p>
			Edit
			<code>components/HelloWorld.vue</code>
			to test HMR
		</p>
	</div>

	<p>
		Check out
		<a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">
			create-vue
		</a>
		, the official Vue + Vite starter
	</p>
	<p>
		Install
		<a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
		in your IDE for a better DX
	</p>
	<p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>
<script>
export default {
	name: 'HelloWorld'
};
</script>
<script setup>
import { ref } from 'vue';

const props = defineProps({
	msg: {
		type: String,
		default: ''
	}
});
console.log(props, 'props');
const count = ref(0);
</script>
<style scoped>
.read-the-docs {
	color: #888;
}
</style>
