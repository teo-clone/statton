<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<form method="POST">
	<div>
		<div>
			<div>
				Question #{data.question.id}
			</div>
			<h1>
				{data.question.title}
			</h1>
		</div>

		<div>
			{#each data.question.answers as option (option)}
				<label>
					<input type="radio" name="selectedAnswer" value={option.id} required />
					{option.title}
				</label>
			{/each}
		</div>

		<button>
			{'SUBMIT >>'}
		</button>
	</div>
</form>
