<template>
	<div style="background-color: #F1FAFF; padding: 12px; border-radius: 6px;">
		<InfoLine title="坐诊医院" :value="info.hospital"></InfoLine>
		<InfoLine title="医院地址" :value="info.address"></InfoLine>
		<InfoLine title="坐诊时间" :value="info.time"></InfoLine>
		<InfoLine title="预约电话" :value="info.orderPhone"></InfoLine>
		<InfoLine title="预约方式" :value="info.orderType"></InfoLine>
		<InfoLine title="备注" :value="info.remark"></InfoLine>
	</div>
</template>

<script>
import InfoLine from '~/Info-Line'
export default {
	props: {
		info: {type: Object, default: {}}
	},
	data() {
		return { }
	},
	mounted() { },
	components: { InfoLine },
	methods: { }
}
</script>

<style>

</style>