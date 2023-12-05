<script lang="ts">
	import type { PageData } from './$types';

	import Button from '$lib/components/Button.svelte';

	export let data: PageData;
</script>

<form method="POST">
	<div class="px-10 py-5 flex flex-col gap-5">
		<div class="flex flex-col gap-2">
			<div class="text-xl">
				Question #{data.question.number}
			</div>
			<h1 class="text-3xl font-bold">
				{data.question.title}
			</h1>
		</div>

		<div class="flex flex-col gap-2 text-2xl">
			{#each data.question.answers as option (option)}
				<label>
					<input type="radio" name="selectedAnswer" value={option.id} required />
					{option.title}
				</label>
			{/each}
		</div>

		<input type="hidden" name="questionId" value={data.question.id} />

		<div>
			<button class="text-3xl font-bold">{'SUBMIT >>'}</button>
		</div>
	</div>
</form>
