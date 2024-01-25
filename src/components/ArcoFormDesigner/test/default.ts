import { Story } from '@storybook/vue3';

export default (template: Story<any>) => {
	template.args = {
		formItemList: [
			{
				type: 'select',
				field: 'ejgzfl',
				label: '规则类型',
				required: true,
				options: async () => {
					return new Promise((resolve, reject) => {
						setTimeout(() => {
							resolve([
								{ value: '1', label: '1' },
								{ value: '2', label: '3' },
								{ value: '2', label: '3' },
							]);
						}, 2000);
					});
				},
			},
		],
		formItemLayout: [],
	};
};
