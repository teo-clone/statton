<script lang="ts">
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';
	import PixelatedBorder from '$lib/components/PixelatedBorder.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	export let data: PageData;

	type SortBy = 'questionNum';
	type SortOrder = 'asc' | 'desc';

	$: questions = data.questions;
	$: responses = data.responses;

	const toggleSort = (sortBy: SortBy) => {
		let newOrder: SortOrder = data.sortOrder === 'desc' ? 'asc' : 'desc';
		goto(`?sortBy=${sortBy}&sortOrder=${newOrder}`);
	};
</script>

<div class="flex">
	<button on:click={() => toggleSort('questionNum')} class="text-sm flex font-bold items-center">
		Number
		{#if data.sortOrder === 'desc'}
			<Icon icon="material-symbols:arrow-drop-down" width="20" />
		{:else}
			<Icon icon="material-symbols:arrow-drop-up" width="20" />
		{/if}
	</button>
</div>

<div class="flex flex-col gap-[10px]">
	{#each questions as question}
		<PixelatedBorder>
			<a href={`/questions/${question.number}`}>
				<div class="flex items-center justify-between">
					<div class="block truncate text-base">
						#{question.number}: {question.title}
					</div>
					<div>
						{#if responses.get(question.id)}
							<Icon icon="material-symbols:check-circle" height="20" />
						{/if}
					</div>
				</div>
			</a>
		</PixelatedBorder>
	{/each}
</div>
