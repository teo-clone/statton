<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Chart from 'chart.js/auto';

	Chart.defaults.font.family = 'Pixeloid';
	Chart.defaults.font.size = 16;

	export let chartType: 'pie' | 'bar' | 'polarArea';

	export let slices: {
		label: string;
		count: number;
		focused: boolean;
	}[];

	export let hideLegend: boolean = false;

	let chart: Chart<any> | undefined;

	onMount(() => {
		const ctx = document.getElementById('chart') as HTMLCanvasElement;
		chart = new Chart(ctx, {
			type: chartType,
			data: {
				labels: slices.map((slice) => slice.label),
				datasets: [
					{
						data: slices.map((slice) => slice.count),
						backgroundColor: slices.map((slice) => (slice.focused ? 'black' : 'white')),
						borderColor: 'rgba(10, 10, 10, 0.6)',
						borderWidth: 2
					}
				]
			},
			options: {
				responsive: true,
				plugins: {
					legend: {
						display: !hideLegend,
						position: 'bottom'
					}
				}
			}
		});
	});

	// Cleanup
	onDestroy(() => {
		if (chart) {
			chart.destroy();
		}
	});
</script>

<canvas id="chart" />
