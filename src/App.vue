<template lang="pug">
div
	transition(
		enter-active-class="animate__animated animate__fadeOut",
		leave-active-class="animate__animated animate__fadeOutUpBig animate_delay-2s",
		mode="in-out"
	)
		span.w-screen.h-screen.fixed.block.top-0.left-0.bg-blue-600.py-auto.z-50(
			v-touch:swipe.up="swipeHandler",
			v-show="!open"
		)
			span.flex.items-center.justify-center.h-screen.text-white.flex-col
				img.object-cover.object-center.rounded.mb-3(
					alt="logo",
					class="w-5/6 lg:w-2/6 md:w-3/6",
					:src="logourl"
				)
				h3.font-black.mb-5 Swipe Up atau Klik Tombol Dibawah
				button.text-gray-800.mx-auto.bg-white.border-0.py-2.px-8.rounded.text-lg(
					class="focus:outline-none hover:bg-gray-300",
					@click="open = !open"
				) Buka
	Books
</template>

<script>
import Books from "./components/Books.vue";
import "animate.css";

const logourl = new URL("./assets/logo.png", import.meta.url).href;

export default {
	components: { Books },
	data() {
		return {
			grindEnabled: false,
			open: false,
			logourl,
		};
	},
	methods: {
		swipeHandler(direction) {
			if (direction == "top") this.open = true;
		},
	},
};
</script>