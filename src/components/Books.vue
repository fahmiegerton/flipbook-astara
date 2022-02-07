<template lang="pug">
.bg-blue-300.flex.flex-col.items-center.justify-center.h-screen.overflow-hidden
	flipbook.flipbook(
		:pages="images || []",
		:pages-hi-res="gambarZoom",
		:flip-duration="json.flipDuration || 2000",
		ref="flipbook"
	)
</template>

<script>
import Flipbook from "flipbook-vue";

const img = import.meta.globEager("../assets/menus/*.jpg");
const images = [null, ...Object.values(img).map((m) => m.default)];

const imgprev = import.meta.globEager("../assets/menusprev/*.jpg");
const imagesprev = [null, ...Object.values(imgprev).map((m) => m.default)];

const gambar = import.meta.globEager("../assets/gambar.json");
const json = Object.values(gambar).map((m) => m.default);

export default {
	components: { Flipbook },
	data() {
		return {
			images,
			imagesprev,
			json,
		};
	},
	computed: {
		gambarZoom() {
			if (!json?.useSingleSource) {
				return undefined;
			} else if (images && images.length == imagesprev.length) {
				return images;
			}
		},
	},
};
</script>

<style scoped>
.flipbook {
	width: 100vw;
	height: 100vh;
}
</style>