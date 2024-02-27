<script lang="ts">
	import Chart from '$lib/components/Chart.svelte';
	import ChartTypeToggler from '$lib/components/ChartTypeToggler.svelte';
	import { alphabet } from '$lib/utils/miscUtils';
	import type { PageData } from './$types';

	export let data: PageData;

	const totalNumResponses = data.stats.reduce((accumulator, { count }) => accumulator + count, 0);

	const percentinator = (count: number) => {
		return ((count / totalNumResponses) * 100).toFixed();
	};

	const slices = data.stats.map((stat, i) => {
		return {
			label: `(${alphabet[i]})`,
			angle: stat.count,
			focused: data.response?.title === stat.answer
		};
	});

	let chartType: 'pie' | 'polarArea' | 'bar' = 'pie';
</script>

<div class="flex flex-col gap-2">
	<h1 class="text-xl font-bold">
		{data.question.title}
	</h1>
</div>

<div class="flex flex-col gap-[10px] text-xl items-center">
	{#each data.stats as { answer, count }, i}
		<div
			class={`flex w-full justify-between ${
				data.response?.title === answer ? 'bg-black text-white w-fit' : ''
			}`}
		>
			<div>({alphabet[i]}) {answer}</div>
			<div>{percentinator(count)}% ({count})</div>
		</div>
	{/each}
</div>

<div class="mt-[20px] flex flex-col items-center justify-center gap-[10px]">
	<div class="flex items-center gap-2 mb-5">
		<p class="text-sm">view as:</p>
		<ChartTypeToggler bind:chartType toggleValue="pie" />
		<ChartTypeToggler bind:chartType toggleValue="polarArea" />
		<ChartTypeToggler bind:chartType toggleValue="bar" />
	</div>

	{#if chartType === 'pie'}
		<Chart chartType="pie" {slices} />
	{:else if chartType === 'polarArea'}
		<Chart chartType="polarArea" {slices} />
	{:else if chartType === 'bar'}
		<Chart chartType="bar" {slices} hideLegend />
	{/if}
</div>
