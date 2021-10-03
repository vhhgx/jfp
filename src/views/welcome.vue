<template>
	<div class="page-height flex column main-between">
		<div id="main">
			<div id="head" class="flex column main-between" style="height: 124px; background-color: #0050b3; margin: -16px -16px 0 -16px; padding: 24px 16px;">
				<div>
					<div style="font-size: 40px; color: #ffffff;" class="xqn">经方大夫</div>
					<div style="color: #ffffff; margin-top: 8px;">快捷查询周边经方派医师</div>
				</div>
				
				<div class="" style="margin-top: 12px; color: #ffffff;">
					<i class="iconfont" style="font-size: 16vvpx;">&#xe750;</i>
					<span style="margin-left: 8px;">{{province}} {{city}}</span>
				</div>
			</div>
			<div id="list" style="margin-top: 16px; overflow-y: auto; height: calc(100vh - 204px - 40px + 16px)">
				<div v-for="(item, index) in hospital" :key="index" class="list">
					<DoctorList :list="item" :province="provPy" :city="cityPy"></DoctorList>
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
import { config } from '#/utils/info.config.js'
import axios from 'axios'

export default {
	data() {
		return {
			hospital: [],
			province: '', 
			city: '',
			provPy: '',
			cityPy: ''
		}
	},
	created() {
		this.getLocalCity()
	},
	components: { 
		DoctorList
	},
	methods: {
		/**
		 * 首页：
		 * 	1. 先通过高德api获取省市数据
		 * 	2. 通过省字典，获取省的拼音
		 * 	3. 查询该省数据  【这里就要有一个判断，如果该省没有的话就显示没有】
		 * 	4. 通过该省数据中的市字典，获取市的拼音
		 * 	5. 查询该市数据  【这里就要有一个判断，如果该省没有的话就显示没有】
		 * 	
		 * 
		 * 详情页
		 * 	1. 通过医生姓名、省拼音、市拼音查询到该医生的信息
		 * 	2. 显示该医生的信息
		 * 
		 * 接下来版本要做的
		 * 	1. 省和市没有医生的缺省页
		 * 	2. 优化上面的axios方式
		 * 	3. 该省没有和该市没有要区分开。暂时先不区分
		 * 
		 */

		getLocalCity() {
			axios.get(config.localApi, {params: {key: config.amapKey}}).then(res => {
				return [res.data.province, res.data.city]
			}).then((res)=>{
				this.province = res[0]
				this.city = res[1]
				
				let provPy = config.provinceList[res[0]]
				this.provPy = config.provinceList[res[0]]

				provPy == undefined ? this.hospital = [] : this.getHospital(provPy, res[1])
			})
		},

		getHospital(provPy, city) {
			this.$vget(provPy).then(res => {
				// console.log('首页查询该省', res)
				let cityPy = res.cityList[city]
				this.cityPy = res.cityList[city]
				this.hospital = res.city[cityPy]
			})
		}
	}
}
</script>

<style>
.list:last-child { margin-bottom: 0; }
</style>