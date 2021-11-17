<template>
<!-- @click="toDetail(list.doctor)" -->
	<div class="doctorCard flex column">
		<div class="flex main-between cross-center">
			<div style="font-size: 18px; font-weight: 700; color: #002766;">{{list.doctor}}</div>
			<div style="color: #002766; font-size: 14px;">{{list.title}}</div>
		</div>
		<div style="margin-top: 12px; font-size: 14px; color: #636363;" v-if="list.hospital == null">该医生有多个坐诊地点</div>
		<div v-else style="margin-top: 12px; font-size: 14px; color: #636363;">{{list.hospital}}</div>
	</div>
</template>

<script>
export default {
	props: {
		list: {type: Object, default: {}}
	},
	methods: {}
}
</script>

<style>
.doctorCard {
	background-color: #F1FAFF;
	padding: 12px;
	border-radius: 6px;
}
</style>