<div class="pixel-corners--wrapper font-bold hover:text-white hover:bg-black">
	<div class="pixel-corners">
		<slot />
	</div>
</div>

<!-- 
	css below comes from: Pixelated rounded corners!
	https://pixelcorners.lukeb.co.uk/?radius=8&multiplier=4 
-->
<style>
	.pixel-corners,
	.pixel-corners--wrapper {
		clip-path: polygon(
			0px calc(100% - 12px),
			4px calc(100% - 12px),
			4px calc(100% - 8px),
			8px calc(100% - 4px),
			12px calc(100% - 4px),
			12px 100%,
			calc(100% - 12px) 100%,
			calc(100% - 12px) calc(100% - 4px),
			calc(100% - 8px) calc(100% - 4px),
			calc(100% - 4px) calc(100% - 8px),
			calc(100% - 4px) calc(100% - 12px),
			100% calc(100% - 12px),
			100% 12px,
			calc(100% - 4px) 12px,
			calc(100% - 4px) 8px,
			calc(100% - 8px) 4px,
			calc(100% - 12px) 4px,
			calc(100% - 12px) 0px,
			12px 0px,
			12px 4px,
			8px 4px,
			4px 8px,
			4px 12px,
			0px 12px
		);
		position: relative;
	}
	.pixel-corners {
		border: 4px solid transparent;
	}
	.pixel-corners--wrapper {
		width: fit-content;
		height: fit-content;
	}
	.pixel-corners--wrapper .pixel-corners {
		display: block;
		clip-path: polygon(
			4px 12px,
			8px 12px,
			8px 8px,
			12px 8px,
			12px 4px,
			calc(100% - 12px) 4px,
			calc(100% - 12px) 8px,
			calc(100% - 8px) 8px,
			calc(100% - 8px) 12px,
			calc(100% - 4px) 12px,
			calc(100% - 4px) calc(100% - 12px),
			calc(100% - 8px) calc(100% - 12px),
			calc(100% - 8px) calc(100% - 8px),
			calc(100% - 12px) calc(100% - 8px),
			calc(100% - 12px) calc(100% - 4px),
			12px calc(100% - 4px),
			12px calc(100% - 8px),
			8px calc(100% - 8px),
			8px calc(100% - 12px),
			4px calc(100% - 12px)
		);
	}
	.pixel-corners::after,
	.pixel-corners--wrapper::after {
		content: '';
		position: absolute;
		clip-path: polygon(
			0px calc(100% - 12px),
			4px calc(100% - 12px),
			4px calc(100% - 8px),
			8px calc(100% - 4px),
			12px calc(100% - 4px),
			12px 100%,
			calc(100% - 12px) 100%,
			calc(100% - 12px) calc(100% - 4px),
			calc(100% - 8px) calc(100% - 4px),
			calc(100% - 4px) calc(100% - 8px),
			calc(100% - 4px) calc(100% - 12px),
			100% calc(100% - 12px),
			100% 12px,
			calc(100% - 4px) 12px,
			calc(100% - 4px) 8px,
			calc(100% - 8px) 4px,
			calc(100% - 12px) 4px,
			calc(100% - 12px) 0px,
			12px 0px,
			12px 4px,
			8px 4px,
			4px 8px,
			4px 12px,
			0px 12px,
			0px 50%,
			4px 50%,
			4px 12px,
			8px 12px,
			8px 8px,
			12px 8px,
			12px 4px,
			calc(100% - 12px) 4px,
			calc(100% - 12px) 8px,
			calc(100% - 8px) 8px,
			calc(100% - 8px) 12px,
			calc(100% - 4px) 12px,
			calc(100% - 4px) calc(100% - 12px),
			calc(100% - 8px) calc(100% - 12px),
			calc(100% - 8px) calc(100% - 8px),
			calc(100% - 12px) calc(100% - 8px),
			calc(100% - 12px) calc(100% - 4px),
			12px calc(100% - 4px),
			12px calc(100% - 8px),
			8px calc(100% - 8px),
			8px calc(100% - 12px),
			4px calc(100% - 12px),
			4px 50%,
			0px 50%
		);
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #000000;
		display: block;
		pointer-events: none;
	}
	.pixel-corners::after {
		margin: -4px;
	}
</style>
