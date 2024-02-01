export const strOrArrToArr = (params: string | Array<string> | null | undefined, splitter = ' '): Array<string> => {
	if (params === null || params === undefined) {
		return [];
	}
	if (Array.isArray(params)) {
		return params;
	} else if (typeof params === 'string') {
		return params.split(splitter);
	} else {
		return [];
	}
};
