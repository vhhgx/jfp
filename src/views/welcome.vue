<template>
	<div class="page-height flex column main-between">
		<div id="main">
			<div id="head" class="flex column main-between" style="height: 124px; background-color: #0050b3; margin: -16px -16px 0 -16px; padding: 24px 16px;">
				<div>
					<div style="font-size: 40px; color: #ffffff;">经方大夫</div>
					<div style="color: #ffffff; margin-top: 8px;">快捷查询周边经方派医师</div>
				</div>
				
				<div class="" style="margin-top: 12px; color: #ffffff;">
					<i class="iconfont" style="font-size: 16vvpx;">&#xe750;</i>
					<span style="margin-left: 8px;">{{prov_cn}} {{city_cn}}</span>
				</div>
			</div>
			<div id="list" style="margin-top: 16px; overflow-y: auto; height: calc(100vh - 204px - 40px + 16px)">
				<div v-for="(item, index) in doctors" :key="index" class="list" style="" @click="toDoctorDetail(item.doctor)">
					<DoctorList :list="item" ></DoctorList>
				</div>
			</div>
		</div>
		<div id="foot" class="flex center" style="height: 40px; margin-bottom: -16px;">
			<span style="color: #CFCFCF; font-size: 13px;">数据来自经方派官网</span>
		</div>
	</div>
</template>

<script>
import DoctorList from '~/Doctor-List'

export default {
	data() {
		return {
			doctors: [],
			prov_cn: '',
			city_cn: ''
		}
	},
	created() {
		this.getDoctor()
	},
	components: { 
		DoctorList
	},
	methods: {
		getDoctor() {
			this.prov_cn = localStorage.getItem('prov_cn')
			this.city_cn = localStorage.getItem('city_cn')
			let prov = localStorage.getItem('prov')
			
			this.$get(prov).then(res => {
				let cityLocal = res.cityList[this.city_cn]
				this.doctors = res.city[cityLocal]
				let doctors = JSON.stringify( res.city[cityLocal] )
				localStorage.setItem('doctors', doctors)
			})
		},

		toDoctorDetail(doctor) {
			localStorage.setItem('doctor', doctor)
			this.$router.push({name:'detail'}) 
		}
	}
}
</script>

<style>
.list { margin-bottom: 12px; }
.list:last-child { padding-bottom: 0; }
</style>