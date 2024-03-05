<script lang="ts">
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';
	import PixelatedBorder from '$lib/components/PixelatedBorder.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import RoundedPixelatedBorder from '$lib/components/RoundedPixelatedBorder.svelte';

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

<div class="flex gap-2 items-center font-bold text-xs">
	Sort By:
	<RoundedPixelatedBorder>
		<button on:click={() => toggleSort('questionNum')} class="flex items-center pl-4 pr-2">
			Latest
			{#if data.sortOrder === 'desc'}
				<Icon icon="material-symbols:arrow-drop-down" width="20" />
			{:else}
				<Icon icon="material-symbols:arrow-drop-up" width="20" />
			{/if}
		</button>
	</RoundedPixelatedBorder>
</div>

<div class="flex flex-col gap-[10px]">
	{#each questions as question}
		<PixelatedBorder>
			<a href={`/questions/${question.number}`}>
				<div class="flex items-center justify-between py-2 px-4">
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
