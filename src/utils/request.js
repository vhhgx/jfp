import axios from 'axios'

const get = (file) => {
	let url = process.env.BASE_URL + 'sortByProvince/' + file + '.json'
	return axios.get(url).then((res)=>{
		return res.data
	})
}

export { get }
