<div class="pixel-corners--wrapper py-2 px-4 text-xl font-bold hover:text-white hover:bg-black">
	<slot />
</div>

<!-- 
	css below comes from: Pixelated rounded corners!
	https://pixelcorners.lukeb.co.uk/?radius=8&multiplier=4 
-->
<style>
	.pixel-corners,
	.pixel-corners--wrapper {
		clip-path: polygon(
			0px calc(100% - 3px),
			3px calc(100% - 3px),
			3px 100%,
			calc(100% - 3px) 100%,
			calc(100% - 3px) calc(100% - 3px),
			100% calc(100% - 3px),
			100% 3px,
			calc(100% - 3px) 3px,
			calc(100% - 3px) 0px,
			3px 0px,
			3px 3px,
			0px 3px
		);
		position: relative;
	}
	.pixel-corners {
		border: 3px solid transparent;
	}
	.pixel-corners--wrapper {
		width: fit-content;
		height: fit-content;
	}
	.pixel-corners--wrapper .pixel-corners {
		display: block;
		clip-path: polygon(
			3px 3px,
			calc(100% - 3px) 3px,
			calc(100% - 3px) calc(100% - 3px),
			3px calc(100% - 3px)
		);
	}
	.pixel-corners::after,
	.pixel-corners--wrapper::after {
		content: '';
		position: absolute;
		clip-path: polygon(
			0px calc(100% - 3px),
			3px calc(100% - 3px),
			3px 100%,
			calc(100% - 3px) 100%,
			calc(100% - 3px) calc(100% - 3px),
			100% calc(100% - 3px),
			100% 3px,
			calc(100% - 3px) 3px,
			calc(100% - 3px) 0px,
			3px 0px,
			3px 3px,
			0px 3px,
			0px 50%,
			3px 50%,
			3px 3px,
			calc(100% - 3px) 3px,
			calc(100% - 3px) calc(100% - 3px),
			3px calc(100% - 3px),
			3px 50%,
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
		margin: -3px;
	}
</style>
