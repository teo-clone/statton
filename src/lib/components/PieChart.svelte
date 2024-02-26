<script lang="ts">
	import P5, { type Sketch } from 'p5-svelte';

	export let slices: {
		label: string;
		angle: number;
		focused: boolean;
	}[];

	const sketch: Sketch = (p5) => {
		p5.setup = () => {
			p5.createCanvas(360, 360);
			p5.textFont('Pixeloid', 24);
		};

		p5.draw = () => {
			let diameter = 320;
			let centerX = 180;
			let centerY = 180;

			let angleStart = 0;
			for (let { label, angle, focused } of slices) {
				if (angle === 0) continue;

				let angleEnd = angleStart + p5.radians(angle);

				p5.fill(focused ? p5.color(50, 50, 50) : p5.color(255, 255, 255));
				p5.arc(centerX, centerY, diameter, diameter, angleStart, angleEnd, p5.PIE);

				// Calculate the midpoint of the slice
				let angleMid = angleStart + (angleEnd - angleStart) / 2;
				let labelRadius = (diameter / 2) * 0.75; // Adjust this value as needed
				let labelX = centerX + labelRadius * Math.cos(angleMid);
				let labelY = centerY + labelRadius * Math.sin(angleMid);

				p5.fill(focused ? p5.color(255, 255, 255) : p5.color(20, 20, 20));
				p5.textAlign(p5.CENTER, p5.CENTER);

				p5.text(label, labelX, labelY);

				angleStart = angleEnd;
			}
		};
	};
</script>

<P5 {sketch} />
