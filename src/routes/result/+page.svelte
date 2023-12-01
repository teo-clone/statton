<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const totalNumResponses = data.stats.reduce((accumulator, { count }) => accumulator + count, 0);

	const percentinator = (count: number) => {
		return ((count / totalNumResponses) * 100).toFixed();
	};
</script>

<div>
	<div>Question #{data.question.id}</div>
	<div>{data.question.title}</div>

	<div>
		Total number of responses: {totalNumResponses}
	</div>

	<div>
		You selected: {data.response?.title}
	</div>

	<div>
		{#each data.stats as { answer, count }, i}
			<div>{answer} {count} ({percentinator(count)}%)</div>
		{/each}
	</div>
</div>
