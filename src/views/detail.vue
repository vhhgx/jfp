<template>
	<div>
		<div style="font-size: 24px; font-weight: 700;">{{doctorDetail.doctor}}</div>
		<div style="margin-top: 8px">{{doctorDetail.title}}</div>

		<div v-if="doctorDetail.sitting !== undefined">
			<div v-for="(item, index) in doctorDetail.sitting">
				<InfoCard :info="item"></InfoCard>
			</div>
		</div>

		<div v-else>
			<InfoCard :info="doctorDetail"></InfoCard>
		</div>

	</div>
</template>

<script>
import InfoCard from '~/Info-Card'

export default {
	data() {
		return {
			doctor: '',
			town: '',
			doctorDetail: {}
		}
	},
	created() { 
		
		this.doctor = this.$route.params.doctor
		this.town = this.$route.params.town
		this.getAllHospital(this.$route.params.province)
	},
	mounted() { },
	components: {
		InfoCard
	},
	methods: {
		getAllHospital(province) {
			this.$vget(province).then((res)=>{
				let allHospital = res.town[this.town]
				this.doctorDetail = allHospital.find((element)=> element.doctor == this.doctor)
				// console.log('doc', this.doctorDetail)
			})
		},
	}
}
</script>

<style>

</style>