<script lang="ts">
	import PieChart from '$lib/components/PieChart.svelte';
	import { alphabet } from '$lib/utils/miscUtils';
	import type { PageData } from './$types';

	export let data: PageData;

	const totalNumResponses = data.stats.reduce((accumulator, { count }) => accumulator + count, 0);

	const percentinator = (count: number) => {
		return ((count / totalNumResponses) * 100).toFixed();
	};

	const pieSlices = data.stats.map((stat, i) => {
		return {
			label: `(${alphabet[i]})`,
			angle: (stat.count / totalNumResponses) * 360,
			focused: data.response?.title === stat.answer
		};
	});
</script>

<div class="px-10 py-5 flex flex-col gap-5">
	<div class="flex flex-col gap-2">
		<h1 class="text-3xl font-bold">
			{data.question.title}
		</h1>
	</div>

	<div class="flex flex-col gap-[10px] text-2xl items-center">
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
	<div class="flex justify-center">
		<PieChart slices={pieSlices} />
	</div>

	<div class="pt-5">
		Check back later today to see more respones. New question tomorrow 12am EST
	</div>
</div>
