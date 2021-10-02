<template>
	<div class="flex" style="line-height: 26px;">
		<div class="flex-1" style="font-weight: 700">{{title}}</div>
		<div class="flex-2">{{value}}</div>
	</div>
</template>

<script>
export default {
	props: {
		title: { type: String, default: '标题' },
		value: { type: String, default: '暂无' },
	},
	data() {
		return { }
	},
	mounted() { },
	components: { },
	methods: { }
}
</script>

<style>

</style>