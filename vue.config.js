const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
	publicPath: process.env.PUBLIC_PATH,
	lintOnSave: false,
  chainWebpack: (config) => {   
    config.resolve.alias
		.set('#',resolve('/src'))
    .set('~',resolve('/src/components'))
		.set('views',resolve('/src/views'));
	},
	// devServer: {
	// 	proxy: 'http://localhost:4000'
	// }

	// devServer: {
	// 	overlay: { warnings: true, errors: true },
  //   disableHostCheck: true,
	// 	proxy: { 
	// 		'/api': {
	// 			// target: process.env.VUE_APP_PROXY_URL,
	// 			target: 'http://pv.sohu.com/',
	// 			changOrigin: true,
	// 			secure: false,
	// 			pathRewrite: {
	// 				'^/api': '' 
	// 			}
	// 		},
	// 	}
	// },
};