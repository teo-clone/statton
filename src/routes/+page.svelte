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
	<button on:click={() => toggleSort('questionNum')}>
		<RoundedPixelatedBorder>
			<div class="flex items-center pl-4 pr-2">
				Latest
				{#if data.sortOrder === 'desc'}
					<Icon icon="material-symbols:arrow-drop-down" width="20" />
				{:else}
					<Icon icon="material-symbols:arrow-drop-up" width="20" />
				{/if}
			</div>
		</RoundedPixelatedBorder>
	</button>
</div>

<div class="flex flex-col gap-[10px]">
	{#each questions as question}
		<PixelatedBorder>
			<a href={`/questions/${question.number}`}>
				<div class="flex items-center justify-between py-1 px-2">
					<div class="flex items-center gap-2 block truncate">
						<div class="text-xs font-bold">
							#{question.number}:
						</div>
						<div class="block truncate">
							{question.title}
						</div>
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
