<script lang="ts">
	import Chart from '$lib/components/Chart.svelte';
	import ResultTypeToggler from '$lib/components/ResultTypeToggler.svelte';
	import { alphabet } from '$lib/utils/miscUtils';
	import type { PageData } from './$types';

	export let data: PageData;

	const totalNumResponses = data.stats.reduce((accumulator, { count }) => accumulator + count, 0);

	const percentinator = (count: number) => {
		return ((count / totalNumResponses) * 100).toFixed();
	};

	const slices = data.stats.map((stat, i) => {
		return {
			label: `(${alphabet[i]}) ${stat.answer}`,
			count: stat.count,
			focused: data.response?.title === stat.answer
		};
	});

	let resultType: ResultType = 'vanilla';
</script>

<div class="flex flex-col gap-1">
	<h2 class="text-xs font-bold">Question #{data.question.number}</h2>
	<h1 class="font-bold text-xl">{data.question.title}</h1>
</div>

<div class=" flex flex-col justify-center gap-[10px]">
	<div class="flex items-center gap-1 mb-5 text-xs">
		<div class="font-bold">results:</div>
		<ResultTypeToggler bind:resultType toggleValue="vanilla" />
		<ResultTypeToggler bind:resultType toggleValue="pie" />
		<ResultTypeToggler bind:resultType toggleValue="polarArea" />
		<ResultTypeToggler bind:resultType toggleValue="bar" />
	</div>

	{#if resultType === 'vanilla'}
		<div class="flex w-full flex-col gap-[10px]">
			{#each slices as { label, count, focused }}
				<div class={`flex w-full justify-between text-lg ${focused ? 'bg-black text-white' : ''}`}>
					<div>{label}</div>
					<div>{percentinator(count)}% ({count})</div>
				</div>
			{/each}
		</div>
	{:else if resultType === 'pie'}
		<Chart chartType="pie" {slices} />
	{:else if resultType === 'polarArea'}
		<Chart chartType="polarArea" {slices} />
	{:else if resultType === 'bar'}
		<Chart chartType="bar" {slices} hideLegend />
	{/if}
</div>
