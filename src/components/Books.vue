<template lang="pug">
.bg-blue-300.flex.flex-col.items-center.justify-center.h-screen.overflow-hidden
	flipbook.flipbook(
		:pages="imagesprev",
		:pages-hi-res="images",
		:flip-duration="2000",
		ref="flipbook"
	)
</template>

<script>
import Flipbook from "flipbook-vue";

const img = import.meta.globEager("../assets/menus/*.jpeg");
const images = [null, ...Object.values(img).map((m) => m.default)];

const imgprev = import.meta.globEager("../assets/menusprev/*.jpeg");
const imagesprev = [null, ...Object.values(imgprev).map((m) => m.default)];

export default {
	components: { Flipbook },
	data() {
		return {
			images,
			imagesprev,
		};
	},
};
</script>

<style scoped>
.flipbook {
	width: 100vw;
	height: 100vh;
}
</style>