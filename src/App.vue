<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import DoctorList from '~/Doctor-List'
import { config } from '#/utils/info.config.js'
import axios from 'axios'

export default {
	data() {
		return { }
	},
	created() {
		this.getLocalCity()
	},
	components: { 
		DoctorList
	},
	methods: {

		getLocalCity() {
			axios.get(config.localApi, {params: {key: config.amapKey}}).then(res => {
				let prov = config.provinceList[res.data.province]

				localStorage.setItem('prov', prov)
				localStorage.setItem('prov_cn', res.data.province)
				localStorage.setItem('city_cn', res.data.city)
			})
		},
	}
}
</script>

<style>
#app { margin: 16px }
</style>
