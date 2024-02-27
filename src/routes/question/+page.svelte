<script lang="ts">
	import PixelatedBorder from '$lib/components/PixelatedBorder.svelte';
	import { alphabet } from '$lib/utils/miscUtils';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col gap-2">
	<h1 class="text-xl font-bold">
		{data.question.title}
	</h1>
</div>

<form method="POST">
	<div class="flex flex-col gap-2 text-xl">
		{#each data.question.answers as option, i}
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

	<input hidden name="questionId" value={data.question.id} />

	<button class="w-fit mt-5">
		<PixelatedBorder>{'SUBMIT >>'}</PixelatedBorder>
	</button>
</form>
