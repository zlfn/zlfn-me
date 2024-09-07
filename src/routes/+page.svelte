<script lang="ts">
	import Box from './Box.svelte';
	import EmailVector from './EmailVector.svelte';
	import GitHubVector from './GitHubVector.svelte';
	import XVector from './XVector.svelte';
	import BlogVector from './BlogVector.svelte';
	import { fade } from 'svelte/transition';
	
	interface trans {
		x: number,
		y: number,
	};

	let zlfns: trans[] = [];
	let mouse: trans = {x:0, y:0};

	for (let i = 0; i < 5; i++) {
		zlfns.push({
			x: Math.random() * (7) + (-53.5),
			y: Math.random() * (7) + (-53.5),
		})
	}

	function spreadZlfn(e: MouseEvent) {
		for (let i = 0; i < 5; i++) {
			zlfns[i] = {
				x: Math.random() * (20) + (-60),
				y: Math.random() * (20) + (-60),
			}
		}

		//Spread opposite the mouse position
		const vec_x = (e.x - window.screen.width/2);
		const vec_y = (e.y - window.screen.height/2);
		mouse = {
			x: (vec_x / Math.sqrt(Math.pow(vec_x, 2) + Math.pow(vec_y, 2))) * 5,
			y: (vec_y / Math.sqrt(Math.pow(vec_x, 2) + Math.pow(vec_y, 2))) * 10,
		}

		zlfns = zlfns;
	}

	function gatherZlfn() {
		for (let i = 0; i < 5; i++) {
			zlfns[i] = {
				x: Math.random() * (7) + (-53.5),
				y: Math.random() * (7) + (-53.5),
			}
		}

		mouse = {x: 0, y:0};

		zlfns = zlfns;
	}

	let highlight_github = false;
	let highlight_email = false;
	let highlight_x = false;
	let highlight_blog = false;
	let highlight_birthday = false;
</script>

<div class="content-center h-[100vh]">
	<div class="block text-center">
		<Box width={90} height={70} transx={5} transy={2}/>
		<Box width={70} height={50} transx={-3} transy={-4}/>
		<Box width={50} height={35} transx={-8} transy={4}/>
		{#each zlfns as zlfn}
			<p class="inline absolute m-0 text-([12rem] white center) 
			font-(jetbrains bold) mix-blend-overlay z-10" 
			style="transform: translate({zlfn.x - mouse.x}%, {zlfn.y - mouse.y}%); transition-duration: 600ms"
			on:mouseenter={(e)=>spreadZlfn(e)}
			on:mouseleave={()=>gatherZlfn()}
		>zlfn</p>
		{/each}

		<Box width={90} height={40} transx={-25} transy={0}
		highlight={highlight_github} href={"https://github.com/zlfn"}
		on:mouseenter={()=>highlight_github=true}
		on:mouseleave={()=>highlight_github=false}
		>
			<p class="absolute bottom-34 text-(2xl white) font-jetbrains opacity-100">GitHub</p>
			{#if highlight_github}
				<GitHubVector />
				<p in:fade={{delay:500, duration:300}} class="absolute w-90 left-229 bottom-23 text-(2xl white) font-jetbrains -rotate-17">{"github.com/zlfn >"}</p>
				<p class="relative bottom-2 text-(5xl white) font-(jetbrains bold) opacity-100">github.com/</p>
			{:else}
				<p class="relative bottom-2 text-(5xl white) font-(jetbrains bold) opacity-30">github.com/</p>
			{/if}
		</Box>
		<Box width={70} height={50} transx={-20} transy={-8}
		highlight={highlight_email} href={"mailto:ung@zlfn.space"}
		on:mouseenter={()=>highlight_email=true}
		on:mouseleave={()=>highlight_email=false}
		>
			<p class="absolute bottom-44 text-(2xl white) font-jetbrains opacity-100">Email</p>
			{#if highlight_email}
				<EmailVector/>
				<p in:fade={{delay:500, duration:300}} class="absolute w-90 left-213 top-100 text-(2xl white) font-jetbrains -rotate-4">{"ung@zlfn.space >"}</p>
				<p class="relative bottom-10 right-2 text-(8xl white) font-(jetbrains bold) opacity-100">ung@</p>
			{:else}
				<p class="relative bottom-10 right-2 text-(8xl white) font-(jetbrains bold) opacity-30">ung@</p>
			{/if}
		</Box>
		<Box width={60} height={35} transx={-15} transy={9}
		highlight={highlight_x} href={"https://x.com/zlfn1102"}
		on:mouseenter={()=>highlight_x=true}
		on:mouseleave={()=>highlight_x=false}
		>
			<p class="absolute bottom-28 text-(2xl white) font-jetbrains opacity-100">X</p>
			{#if highlight_x}
				<XVector/>
				<p in:fade={{delay:500, duration:300}} class="absolute w-70 left-152 -top-47 text-(2xl white) font-jetbrains -rotate-10">{"x.com/zlfn1102 >"}</p>
				<p class="relative right-2 text-(5xl white) font-(jetbrains bold) opacity-100">x.com/</p>
			{:else}
				<p class="relative right-2 text-(5xl white) font-(jetbrains bold) opacity-30">x.com/</p>
			{/if}
		</Box>
		<Box width={100} height={35} transx={24} transy={7}
		highlight={highlight_email || highlight_blog} href={"https://zlfn.space"}
		on:mouseenter={()=>highlight_blog=true}
		on:mouseleave={()=>highlight_blog=false}
		>
			<p class="absolute right-0 bottom-29 text-(2xl white) font-jetbrains opacity-100">Blog</p>
			{#if highlight_blog}
				<BlogVector/>
				<p in:fade={{delay:500, duration:300}} class="absolute w-70 -left-15 top-46 text-(2xl white) font-jetbrains -rotate-5">{"< zlfn.space"}</p>
			{/if}
			{#if highlight_email || highlight_blog}
				<p class="relative bottom-18 right-2 text-(8xl white) font-(jetbrains bold) opacity-100">.space</p>
			{:else}
				<p class="relative bottom-18 right-2 text-(8xl white) font-(jetbrains bold) opacity-30">.space</p>
			{/if}
		</Box>
		<Box width={80} height={40} transx={18} transy={-10}
		highlight={highlight_x || highlight_birthday} href={"https://nuphy.com/apps/wishlist/66dc7ff86e278e0c241b2133"}
		on:mouseenter={()=>highlight_birthday=true}
		on:mouseleave={()=>highlight_birthday=false}
		>
			<p class="absolute right-0 bottom-34 text-(2xl white) font-jetbrains opacity-100">Birthday</p>
			{#if highlight_x || highlight_birthday}
				<p class="relative bottom-18 right-2 text-(8xl white) font-(jetbrains bold) opacity-100">1102</p>
			{:else}
				<p class="relative bottom-18 right-2 text-(8xl white) font-(jetbrains bold) opacity-30">1102</p>
			{/if}
		</Box>

	</div>
</div>
