<template>
	<div class="doctorCard flex column" @click="toDetail(list.doctor)">
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
		list: {type: Object, default: {}},
		city: {type: String, default: ''},
		province: {type: String, default: ''}
	},
	methods: {
		toDetail(doctor) {
			// console.log('医生列表组件', doctor, this.$props.province, this.$props.city)
			let props = this.$props
			let city = props.city
			let province = props.province
			this.$router.push({name:'detail', params: { doctor, city, province}}) 
		},
	}
}
</script>

<style>
.doctorCard {
	background-color: #F1FAFF;
	margin-bottom: 12px;
	padding: 12px;
	border-radius: 6px;
}
/* .doctorCard:last-child { margin-bottom: 0; } */
</style>