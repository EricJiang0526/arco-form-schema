import ArcoFormDesigner from './index';
import { Story } from '@storybook/vue3';
import _default from './test/default';

export default {
	component: ArcoFormDesigner,
	title: 'ArcoFormDesigner',
	decorators: [() => ({ template: '<div style="margin: 1em;"><story/></div>' })],
};

const Template: Story<any> = (props) => (
	<ArcoFormDesigner form-item-list={props.formItemList} form-item-layout={props.formItemLayout}></ArcoFormDesigner>
);

export const Default = Template.bind({});
_default(Default);
