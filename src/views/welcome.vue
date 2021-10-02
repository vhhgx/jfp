<template>
	<div class="page-height flex column main-between">

		<!-- 列表和页头 -->
		<div>
			<div style="height: 90px;" class="flex center">
				<div style="font-size: 52px; color: #0050b3;" class="xqn ">经方大夫</div>
			</div>
			
			<div class="flex center" style="height: 39px">
				<i class="iconfont" style="font-size: 18px;">&#xe750;</i>
				<span style="margin-left: 8px;">北京 东城</span> 
			</div>
			<div style="overflow-y:auto; height: calc( 100vh - 194px );">
				<div v-for="(item, index) in allHospital" :key="index">
					<div class="doctorCard flex column" @click="toDetail(item.doctor)">
						<div class="flex main-between cross-center">
							<div style="font-size: 18px;">{{item.doctor}}</div>
							<div style="color: #3E3E3E;">{{item.title}}</div>
						</div>
						<div style="margin-top: 12px;" v-if="item.hospital == null">该医生有多个坐诊地点</div>
						<div v-else style="margin-top: 12px;">{{item.hospital}}</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 页尾 -->
		<div>
			<div style="height: 32px" class="flex cross-end main-center">
				<span style="color: #CFCFCF; font-size: 13px;">数据来自经方派官网</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			allHospital: []
		}
	},
	created() {
		this.getAllHospital()
	},
	mounted() { },
	components: { },
	methods: {
		getAllHospital() {
			this.$vget('beijing').then((res)=>{
				console.log(res)
				this.allHospital = res.town.dongcheng
			})
		},
		toDetail(doctor) {
			this.$router.push({name:'detail', params: { doctor: doctor, town: 'dongcheng', province: 'beijing'}}) 
		}
	}
}
</script>

<style>
.doctorCard {
	background-color: #e6f7ff;
	/* width: 100%; */
	margin-bottom: 12px;
	/* height: 140px; */
	padding: 12px;
}
</style>