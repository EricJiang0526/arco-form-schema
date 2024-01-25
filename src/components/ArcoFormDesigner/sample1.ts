export interface Form {
	showColon?: boolean;
}

export interface FormItem {
	field: string;
	label?: string;
	disabled?: boolean;
}

export interface LayoutItem {
	key: string;
	label?: string;
	required?: boolean;
}
