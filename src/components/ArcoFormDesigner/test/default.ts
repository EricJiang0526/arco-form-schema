import { Story } from '@storybook/vue3';
import { ref } from 'vue';

export default (template: Story<any>) => {
	template.args = {
		modelValue: {
			sjb: '',
			sjx: '',
		},
		formItemList: [
			{
				field: 'sjb',
				label: '数据表',
				required: true,
				type: 'select',
				showLoading: true,
				// options: async () => {
				// 	return new Promise((resolve) => {
				// 		setTimeout(() => {
				// 			resolve([
				// 				{ value: '1', label: '1' },
				// 				{ value: '2', label: '3' },
				// 				{ value: '2', label: '3' },
				// 			]);
				// 		}, 2000);
				// 	});
				// },
				options: [
					{ value: '1', label: '1' },
					{ value: '2', label: '2' },
					{ value: '3', label: '3' },
				],
			},
			{
				field: 'sjx',
				label: '数据项',
				required: true,
				type: 'select',
				bindKeys: 'sjb',
				showLoading: true,
				// options: async (model: Record<string, any>) => {
				// 	const { sjb } = model;
				// 	return new Promise((resolve) => {
				// 		setTimeout(() => {
				// 			resolve([
				// 				{
				// 					value: `${sjb}1`,
				// 					label: `${sjb}1`,
				// 				},
				// 				{
				// 					value: `${sjb}2`,
				// 					label: `${sjb}2`,
				// 				},
				// 				{
				// 					value: `${sjb}3`,
				// 					label: `${sjb}3`,
				// 				},
				// 			]);
				// 		}, 2000);
				// 	});
				// },
				options: [
					{ value: '1', label: '1' },
					{ value: '2', label: '3' },
					{ value: '2', label: '3' },
				],
			},
		],
		formItemLayout: [],
	};
};
