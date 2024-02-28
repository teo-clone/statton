<script>
	import '../app.css';
</script>

<div id="header" class="border-b">
	<div class="w-fit border-r px-10 flex gap-5 items-center">
		<img class="w-[30px]" src={'/cube.svg'} alt="3d rotating cube" />
		<div class="py-5 text-lg font-bold">STATTON</div>
	</div>
</div>

<div class="max-w-[600px] px-10 py-5 flex flex-col gap-5">
	<slot />
</div>
