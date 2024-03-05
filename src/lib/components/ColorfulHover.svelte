<script lang="ts">
	let isHovered = false;

	const primaryColors = [
		'bg-[#FF0000]', // Red
		'bg-[#00CC00]', // Green
		'bg-[#FFDB58]', // Yellow
		'bg-[#0080FF]', // Blue
		'bg-[#FF8000]' // Orange
	];

	let colorIndex = Math.floor(Math.random() * primaryColors.length);

	const handleHover = () => {
		colorIndex = (colorIndex + 1) % primaryColors.length;
	};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
	on:mouseenter={() => (isHovered = true)}
	on:mouseleave={() => (isHovered = false)}
	on:mouseleave={handleHover}
	class="flex gap-2 py-2 items-center"
>
	<slot name="extraHoverer" />

	<div class={isHovered ? `${primaryColors[colorIndex]} text-white` : ''}>
		<div class="px-2">
			<slot />
		</div>
	</div>
</div>
