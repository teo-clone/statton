<script lang="ts">
	import RoundedPixelatedBorder from './RoundedPixelatedBorder.svelte';

	export let resultType: ResultType;
	export let toggleValue: ResultType;

	$: isSelected = resultType === toggleValue;

	let labelMap = new Map();
	labelMap.set('vanilla', 'Default');
	labelMap.set('pie', 'Pie');
	labelMap.set('polarArea', 'Polar');
	labelMap.set('bar', 'Bar');
</script>

<button on:click={() => (resultType = toggleValue)}>
	<RoundedPixelatedBorder>
		<div class={`px-3 ${isSelected ? 'bg-black text-white' : ''}`}>
			{labelMap.get(toggleValue)}
		</div>
	</RoundedPixelatedBorder>
</button>
