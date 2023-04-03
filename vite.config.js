/*
 * @Author: chenxing
 * @Date: 2023-03-21 23:15:15
 * @LastEditTime: 2023-04-03 11:10:27
 * @LastEditors: chenxing m17817095394@163.com
 * @Description:
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': resolve('./src') //别名设置
		}
	},
	plugins: [
		vue(),
		Components({
			resolvers: [
				AntDesignVueResolver({
					importStyle: false, //global.less 设置全局样式
					resolveIcons: true
				})
			]
		})
		// eslintPlugin({
		//   include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.jsx', 'src/**/*.ts'],
		//   // exclue: ['./node_modules/**'],
		//   cache: false
		// }),
	],
	css: {
		preprocessorOptions: {
			less: {
				// 不用在 modifyVars配置
				modifyVars: {},
				javascriptEnabled: true
			}
		}
	},
	server: {
		port: 8089,
		host: '0.0.0.0',
		// 是否开启 https
		https: false,
		cors: true, // 默认启用并允许任何源
		//open: true, // 在服务器启动时自动在浏览器中打开应用程序
		//反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
		proxy: {
			'/api': {
				target: 'http://111', //代理接口
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
});
