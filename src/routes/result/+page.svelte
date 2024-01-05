<script lang="ts">
	import { alphabet } from '$lib/utils/miscUtils';
	import type { PageData } from './$types';

	export let data: PageData;

	const totalNumResponses = data.stats.reduce((accumulator, { count }) => accumulator + count, 0);

	const percentinator = (count: number) => {
		return ((count / totalNumResponses) * 100).toFixed();
	};
</script>

<div class="px-10 py-5 flex flex-col gap-5">
	<div class="flex flex-col gap-2">
		<div class="text-xl">
			Question #{data.question.number}
		</div>
		<h1 class="text-3xl font-bold">
			{data.question.title}
		</h1>
	</div>

	<div>
		<div class="inline-grid grid-cols-2 gap-y-2 gap-x-10 text-2xl">
			{#each data.stats as { answer, count }, i}
				{#if data.response?.title === answer}
					<div class="bg-black text-white w-fit">({alphabet[i]}) {answer}</div>
					<div class="bg-black text-white w-fit">{percentinator(count)}% ({count})</div>
				{:else}
					<div>({alphabet[i]}) {answer}</div>
					<div>{percentinator(count)}% ({count})</div>
				{/if}
			{/each}
		</div>
	</div>

	<div class="pt-5">
		Check back later today to see more respones. New question tomorrow 12am EST
	</div>
</div>
