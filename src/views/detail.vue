<template>
	<div class="page-height flex column main-between">
		<div id="head" class="flex column" style="height: 124px; background-color: #0050b3; margin: -16px -16px 0 -16px; padding: 24px 16px;">

			<div class="flex cross-center" style="color: #ffffff;">
				<i class="iconfont" style="font-size: 18px" @click="back">&#xe748;</i>
				<span style="margin-left: 12px;" >医师详情</span>
			</div>

			<span style="font-size: 32px; color: #ffffff; margin-top: 20px;" class="xqn">{{doctorDetail.doctor}}</span>
			<span style="margin-top: 12px; color: #ffffff;">{{doctorDetail.title}}</span>
		</div>

		<div style="margin-top: 16px; overflow-y: auto; height: calc( 100vh - 26px - 178px)">
			<div v-if="doctorDetail.sitting !== undefined">
				<div v-for="(item, index) in doctorDetail.sitting" style="margin-bottom: 16px;" class="list">
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
			doctor: '',
			city: '',
			doctorDetail: {}
		}
	},
	created() {
		// console.log('详情页', this.$route.params.doctor, this.$route.params.city, this.$route.params.province)
		this.doctor = this.$route.params.doctor
		this.city = this.$route.params.city
		this.getAllHospital(this.$route.params.province)
	},
	mounted() { },
	components: {
		InfoCard
	},
	methods: {
		getAllHospital(province) {
			this.$vget(province).then((res)=>{
				// console.log('详情页获取数据', res)
				// 获取该地的医院数组
				let allHospital = res.city[this.city]
				// console.log('ah', allHospital)
				// 获取该医生的数据
				this.doctorDetail = allHospital.find((element)=> element.doctor == this.doctor)
			})
		},
		back() {
			this.$router.go(-1)
		}
	}
}
</script>

<style>
.list:last-child {margin-bottom: 0px;}
</style>