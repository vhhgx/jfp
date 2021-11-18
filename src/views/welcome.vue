<template>
	<div style="height: 100%; background-color: #0050B3;">
    <div style="height: 26%; width: 100%;" class="flex">
      <div class="header flex column main-between" style="width: 100%; height: calc(100% - 40px); padding: 20px;">
        
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; flex-direction: column;">
            <span class="xqn" style="font-size: 48px; color: #ffffff; width: auto;">经方</span>
            <span class="xqn" style="font-size: 48px; color: #ffffff;">大夫</span>
          </div>

          <div style="display: flex; height: 100%; align-items: center;">
            <div class="flex column center " style="background-color: rgba(0,0,0,0.3); height: 55%; padding: 12px; border-radius: 12px; ">
              <span style="color: #ffffff; font-size: 18px;">{{day}}</span>
              <span style="color: #ffffff; margin-top: 12px;">{{day_en}}</span>
            </div>
          </div>
        </div>

        <div class="flex main-end" style="color: #ffffff; margin-top: 12px;">
          <i class="iconfont" style="font-size: 16px;">&#xe750;</i>
					<span style="margin-left: 8px;">{{prov_cn}} {{city_cn}}</span>
        </div>
          
      </div>
    </div>
    <div style="height: calc(100% - 26%); background-color: #ffffff; border-top-left-radius: 20px; border-top-right-radius: 20px; position: relative">
      <div style="display: flex; justify-content: center;">
        <div style="position: absolute; z-index: 99; top: 12px; background-color: #0050B3; width: 56px; height: 4px; border-radius: 5px;"></div>
      </div>
			<div style="margin: 30px 20px 0;" class="flex main-between cross-center">
				<span style="color: #0050B3; font-size: 24px;" class="xqn">今日坐诊医生</span>
				<span style="color: #BEBEBE;">查看全部</span>
			</div>
      <div style="margin-top: 16px; padding: 0 20px; overflow-y: auto; height: calc(100% - 30px - 30px - 16px - 42px)">
				<div v-for="(item, index) in doctors" :key="index" class="list">
				<!-- <div v-for="(item, index) in doctors" :key="index" class="list" @click="toDoctorDetail(item.doctor)"> -->
					<DoctorList :list="item"></DoctorList>
				</div>
			</div>
			<div id="foot" class="flex center" style="position: absolute; z-index: 99; bottom: 0; height: 40px; width: 100%">
				<span style="color: #CFCFCF; font-size: 13px;">数据来自经方派官网</span>
			</div>
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
			city_cn: '',
			day: '',
			day_en: ''
		}
	},
	created() {
		this.getWeek()
		this.getDoctor()
	},
	components: { 
		DoctorList
	},
	methods: {
		getWeek() {
			let weekday = {0: '周日', 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六'}
			let week_en = {0: 'Sun.', 1: 'Mon.', 2: 'Tue.', 3: 'Wed.', 4: 'Thu.', 5: 'Fri.', 6: 'Sat.'}
			// let num = 
			this.day = weekday[new Date().getDay()]
			this.day_en = week_en[new Date().getDay()]
		},
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
.list { margin-bottom: 16px; }
.list:last-child { margin-bottom: 0; }

.header {
  background-image: url('../assets/sign.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
}
</style>