import { PropType, defineComponent, toRefs, h } from 'vue';

import useFormSchema from '../hooks/useFormSchema';

import { Form, FormItem } from '@arco-design/web-vue';

export default defineComponent({
	name: 'ArcoFormDesigner',
	props: {
		modelValue: {
			type: Object as PropType<any>,
			default: () => ({}),
		},
		formItemList: {
			type: Array as PropType<any>,
			default: () => [],
		},
		formItemLayout: {
			type: Array as PropType<any>,
			default: () => [],
		},
	},
	setup(props) {
		const prefixCls = 'arco-form-designer';

		const { modelValue, formItemList, formItemLayout } = toRefs(props);

		const { formSchema } = useFormSchema(modelValue, formItemLayout, formItemList);

		return () => (
			<Form class={[`${prefixCls}-form`]}>
				{formSchema.value.map((item) => {
					const { key, formItemContent, formItemProps } = item;
					return (
						<FormItem {...formItemProps} class={[`${prefixCls}-form-item`]}>
							{() => {
								const { component, ...rest } = formItemContent;
								console.log(rest);

								return h(component, { ...rest });
							}}
						</FormItem>
					);
				})}
			</Form>
		);
	},
});
