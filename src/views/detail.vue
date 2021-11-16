<template>
	<div class="page-height flex column main-between">
		<div id="head" class="flex column" style="height: 124px; background-color: #0050b3; margin: -16px -16px 0 -16px; padding: 24px 16px;">

			<div class="flex cross-center" style="color: #ffffff;">
				<i class="iconfont" style="font-size: 18px" @click="back">&#xe748;</i>
				<span style="margin-left: 12px;" >医师详情</span>
			</div>

			<span style="font-size: 32px; color: #ffffff; margin-top: 20px;">{{doctorDetail.doctor}}</span>
			<span style="margin-top: 12px; color: #ffffff;">{{doctorDetail.title}}</span>
		</div>

		<div style="margin-top: 16px; overflow-y: auto; height: calc( 100vh - 26px - 178px)">
			<div v-if="doctorDetail.sitting !== undefined">
				<div v-for="(item, index) in doctorDetail.sitting" class="list">
					<InfoCard :info="item"></InfoCard>
				</div>
			</div>

			<div v-else>
				<InfoCard :info="doctorDetail"></InfoCard>
			</div>
		</div>
	</div>
</template>

<script>
import InfoCard from '~/Info-Card'

export default {
	data() {
		return {
			doctorDetail: {}
		}
	},
	created() {
		this.getInfo()
	},
	mounted() { },
	components: {
		InfoCard
	},
	methods: {
		getInfo() {
			let doctor = localStorage.getItem('doctor')
			let doctors = JSON.parse( localStorage.getItem('doctors') )

			this.doctorDetail = doctors.find( item => item.doctor == doctor)
		},
		back() {
			localStorage.removeItem('doctor')
			this.$router.go(-1)
		}
	}
}
</script>

<style>
.list { margin-bottom: 16px; }
.list:last-child {margin-bottom: 0px;}
</style>