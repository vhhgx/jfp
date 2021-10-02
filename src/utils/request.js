import axios from 'axios'

const get = (file) => {
	let url = process.env.BASE_URL + file + '.json'
	return axios.get(url).then((res)=>{
		return res.data
	})
}

// let url = 
// this.$vget(url).then((res)=>{
// 	console.log('res', res.data)
// })

export { get }
