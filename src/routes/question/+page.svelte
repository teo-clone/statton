<script lang="ts">
	import PixelatedBorder from '$lib/components/PixelatedBorder.svelte';
	import { alphabet } from '$lib/utils/miscUtils';
	import type { PageData } from './$types';

	export let data: PageData;

	$: questionId = data.question.id;
	$: question = data.question.title;
	$: answers = data.question.answers;
</script>

<h1 class="text-xl font-bold">{question}</h1>

<form method="POST">
	<div class="flex flex-col gap-2 text-xl">
		{#each answers as option, i}
			<label class="flex w-fit cursor-pointer">
				<input type="radio" name="selectedAnswer" value={option.id} required hidden />
				<div
					class="hover:bg-black hover:text-white label-checked:bg-black label-checked:text-white"
				>
					({alphabet[i]})
					{option.title}
				</div>
			</label>
		{/each}
	</div>

	<input hidden name="questionId" value={questionId} />

	<button class="w-fit mt-5">
		<PixelatedBorder>{'SUBMIT >>'}</PixelatedBorder>
	</button>
</form>
