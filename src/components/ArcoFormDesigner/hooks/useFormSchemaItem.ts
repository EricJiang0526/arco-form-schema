import { computed, ref, toValue, watch } from 'vue';
import { Select, FormItem } from '@arco-design/web-vue';
import { FormItemContentRaw } from '../type';
import { strOrArrToArr } from '../utils/polish';

const componentMap = {
	select: {
		component: Select,
	},
};

const buildContent = (content: FormItemContentRaw) => {
	const { type, options: _options = [], bindKeys, showLoading, ...rest } = content;

	let options = null;
	let reaction = null;

	if (Array.isArray(_options)) {
		options = _options;
	} else if (typeof _options === 'function') {
		const bindKeysArr = strOrArrToArr(bindKeys);
		reaction = bindKeysArr.reduce((acc, k) => {
			acc[k] = _options;
			return acc;
		}, {});
	} else {
		//
	}

	return {
		content: {
			component: componentMap[type].component,
			options,
			...rest,
		},
		reaction,
	};
};

const formItemMapHelper = (item, index: number) => {
	const key = item.key ?? item.field ?? index;

	const { props, content } = Object.keys(item).reduce(
		(acc: Record<string, any>, k: string) => {
			if (!!FormItem.props[k]) {
				acc.props[k] = item[k];
			} else {
				acc.content[k] = item[k];
			}
			return acc;
		},
		{ props: {}, content: {} }
	);

	const { content: formItemContent, reaction: formItemReaction } = buildContent(content);

	return {
		key,
		formItemContent,
		formItemProps: props,
	};
};

const useFormSchemaItem = (formItemList) => {
	const formSchemaItemList = ref([]);
	const updateWatcher = {};

	watch(
		() => toValue(formItemList),
		(val) => {
			formSchemaItemList.value = val.map(formItemMapHelper);
		},
		{
			deep: true,
			immediate: true,
		}
	);

	return {
		formSchemaItemList,
	};
};

export default useFormSchemaItem;
