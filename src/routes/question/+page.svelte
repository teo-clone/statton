<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { alphabet } from '$lib/utils/miscUtils';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<form method="POST">
	<div class="px-10 py-5 flex flex-col gap-5">
		<div class="flex flex-col gap-2">
			<h1 class="text-3xl font-bold">
				{data.question.title}
			</h1>
		</div>

		<div class="flex flex-col gap-2 text-2xl">
			{#each data.question.answers as option, i}
				<label class="flex w-fit cursor-pointer">
					<input
						type="radio"
						name="selectedAnswer"
						value={option.id}
						required
						class="appearance-none"
					/>
					<div
						class="hover:bg-black hover:text-white label-checked:bg-black label-checked:text-white"
					>
						({alphabet[i]})
						{option.title}
					</div>
				</label>
			{/each}
		</div>

		<input type="hidden" name="questionId" value={data.question.id} />

		<div>
			<Button label="SUBMIT >>" />
		</div>
	</div>
</form>
