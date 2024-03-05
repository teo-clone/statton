<script>
	import ColorfulHover from '$lib/components/ColorfulHover.svelte';
	import '../app.css';
</script>

<div class="flex flex-col items-center">
	<div class="max-w-[600px] w-full px-2 flex justify-between items-center">
		<div class="flex">
			<a href="/" class="flex gap-2 py-2 items-center font-bold">
				<ColorfulHover>
					<span slot="extraHoverer">
						<img class="w-[30px]" src={'/cube.svg'} alt="3d rotating cube" />
					</span>
					STATTON
				</ColorfulHover>
			</a>
		</div>
		<!-- <div>
			<PixelatedBorder>
				<a href="/" class="p-1 font-normal text-sm">back</a>
			</PixelatedBorder>
		</div> -->
	</div>

	<div id="header" class="w-full border-b-2" />

	<div class="max-w-[600px] w-screen px-2 py-5 flex flex-col gap-5">
		<slot />
	</div>
</div>
