import {
	reactive,
	toRefs,
	onMounted,
	onUnmounted,
} from 'vue';

import {
	useBreakpoints,
	useDebounceFn,
} from '@vueuse/core';

import variables from 'assets/variables.json';

const useResize = (callback, delay = 300) => {
	const onDebouncedResize = useDebounceFn(callback, delay);

	onMounted(() => window.addEventListener('resize', onDebouncedResize));
	onUnmounted(() => window.removeEventListener('resize', onDebouncedResize));
};

const useMq = () => {
	const breakpoints = reactive(useBreakpoints(variables.breakpoints));

	return {
		...toRefs(breakpoints),
	};
};

export {
	useResize,
	useMq,
};
