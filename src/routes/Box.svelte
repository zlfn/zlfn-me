<script lang="ts">
	import { fade } from "svelte/transition";

	export let width: number = 0;
	export let height: number = 0;
	export let transx: number = 0;
	export let transy: number = 0;
	export let highlight = false;
	export let href: null | string = null;

	$: opacity = highlight ? 90 : 30;
</script>

<div class="inline absolute content-center"
style="width: {width/4}em; height: {height/4}em;
	transform: translate(calc(-50% + {transx}rem), calc(-50% + {transy}rem));">
<slot/>
</div>

{#if href === null}
	<div class="inline absolute content-center bg-white mix-blend-overlay z-0"
	style="width: {width/4}em; height: {height/4}em;
	transform: translate(calc(-50% + {transx}rem), calc(-50% + {transy}rem));
	opacity: {opacity}%;">
	</div>
{:else}
	<a class="inline absolute content-center bg-white mix-blend-overlay z-10"
	on:mouseenter on:mouseleave
	href="{href}"
	style="width: {width/4}em; height: {height/4}em;
	transform: translate(calc(-50% + {transx}rem), calc(-50% + {transy}rem));
	opacity: {opacity}%;">
	</a>
{/if}

{#if highlight}
	<div class="inline absolute content-center bg-white mix-blend-overlay"
	transition:fade={{duration: 200}}
	style="width: {width/4}em; height: {height/4}em;
	transform: translate(calc(-54% + {transx}rem), calc(-54% + {transy}rem));
	opacity: {opacity}%;">
	</div>
{/if}
