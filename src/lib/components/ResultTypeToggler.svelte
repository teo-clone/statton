<script lang="ts">
	export let resultType: ResultType;
	export let toggleValue: ResultType;

	$: isSelected = resultType === toggleValue;

	let labelMap = new Map();
	labelMap.set('vanilla', 'Default');
	labelMap.set('pie', 'Pie');
	labelMap.set('polarArea', 'Polar');
	labelMap.set('bar', 'Bar');
</script>

<button
	class={`px-2 hover:bg-black hover:text-white ${isSelected ? 'bg-black text-white' : ''}`}
	on:click={() => (resultType = toggleValue)}
>
	{labelMap.get(toggleValue)}
</button>
