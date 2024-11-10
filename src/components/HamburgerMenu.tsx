export const HamburgerMenu = ({
	openNavigation,
}: {
	openNavigation: boolean;
}) => {
	return (
		<svg
			className="overflow-visible relative"
			width="20"
			height="22"
			viewBox="0 0 20 15"
		>
			<rect
				className="transition-all origin-center rounded-full "
				y={openNavigation ? '7' : '0'}
				width="20"
				height="2.5"
				rx="1"
				transform={`rotate(${openNavigation ? '45' : '0'})`}
			/>
			<rect
				className="transition-all origin-center rounded-full"
				y={openNavigation ? '6' : '7'}
				width="20"
				height="2.5"
				rx="1"
				fill="text-base"
				transform={`rotate(${openNavigation ? '-45' : '0'})`}
			/>
			<rect
				className="transition-all origin-center rounded-full"
				y={openNavigation ? '6' : '15'}
				width="20"
				height="2.5"
				rx="1"
				fill="text-base"
				transform={`rotate(${openNavigation ? '-45' : '0'})`}
			/>
		</svg>
	);
};
