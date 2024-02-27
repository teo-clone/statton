<script lang="ts">
	export let chartType: 'pie' | 'polarArea' | 'bar';
	export let toggleValue: 'pie' | 'polarArea' | 'bar';

	$: isSelected = chartType === toggleValue;

	let labelMap = new Map();
	labelMap.set('pie', 'Pie');
	labelMap.set('polarArea', 'Polar');
	labelMap.set('bar', 'Bar');
</script>

<button
	class={`px-2 hover:bg-black hover:text-white ${isSelected ? 'bg-black text-white' : ''}`}
	on:click={() => (chartType = toggleValue)}
>
	{labelMap.get(toggleValue)}
</button>
