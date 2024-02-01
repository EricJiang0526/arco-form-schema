import { computed, toValue, watch } from 'vue';

import useFormSchemaItem from './useFormSchemaItem';

const useFormSchema = (modelValue, formItemLayout, formItemList) => {
	const { formSchemaItemList } = useFormSchemaItem(formItemList);

	watch(
		() => toValue(modelValue),
		(val) => {}
	);

	return {
		formSchema: formSchemaItemList,
	};
};

export default useFormSchema;
