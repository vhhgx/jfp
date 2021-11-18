<template>
  <div id="app" :style="{height: `${windowHeight}px`}">
    <router-view/>
  </div>
</template>

<script>
import DoctorList from '~/Doctor-List'
import { config } from '#/utils/info.config.js'
import axios from 'axios'

export default {
	data() {
		return {
			windowHeight: ''
		}
	},
	created() {
		this.getHeight()
		this.getLocalCity()
	},
	components: { 
		DoctorList
	},
	methods: {
		getHeight() { this.windowHeight = window.innerHeight },

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
#app { }
</style>
