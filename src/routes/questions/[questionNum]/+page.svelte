<script lang="ts">
	import PixelatedBorder from '$lib/components/PixelatedBorder.svelte';
	import { alphabet } from '$lib/utils/miscUtils';
	import type { PageData } from './$types';

	export let data: PageData;

	$: questionId = data.question.id;
	$: question = data.question.title;
	$: answers = data.question.answers;
</script>

<div class="flex flex-col gap-1">
	<h2 class="text-xs font-bold">Question #{data.question.number}</h2>
	<h1 class="font-bold text-xl">{question}</h1>
</div>

<form method="POST">
	<div class="flex flex-col gap-2 text-lg">
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

		<input hidden name="questionId" value={questionId} />

		<div class="w-fit mt-5">
			<PixelatedBorder>
				<button class="py-1 px-2 flex items-center gap-2">
					{'SUBMIT'}
					<img class="w-5" src="/right-arrow.svg" alt="pixelated right arrow" />
				</button>
			</PixelatedBorder>
		</div>
	</div>
</form>
