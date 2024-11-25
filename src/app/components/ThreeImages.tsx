import React from 'react';
import Image from 'next/image';

function ThreeImages() {
	return (
		<section className="max-w-[1120px] flex justify-center items-center mt-12 mb-24">
			<div className=" justify-center gap-8 md:flex-row flex-col w-[320px] md:w-full flex">
				<div className="w-full max-w-[512px]  relative">
					<Image
						className="h-[320px] md:h-[420px] lg:w-full"
						src="/images/gym.webp"
						width="512"
						alt="gym"
						height="420"
					></Image>
					<div className="left-[32px] top-[40px] absolute text-light-400 text-32-bold  tracking-tight !leading-10">
						&quot;El dolor
						<br />
						es temporal.&quot;
					</div>
				</div>
				<div className="w-full max-w-[320px] md:max-w-[272px] relative">
					<Image
						className="h-[320px] w-full md:h-[420px] lg:w-full"
						src="/images/run.webp"
						width="272"
						alt="run"
						height="420"
					></Image>
					<div className="left-[32px] bottom-8 md:top-[300px] absolute text-light-400 text-32-bold tracking-tight !leading-10">
						&quot;Supera
						<br />
						tus límites.&quot;
					</div>
				</div>
				<div className="w-full md:max-w-[272px] relative">
					<Image
						className="h-[320px] w-full md:h-[420px] lg:w-full"
						src="/images/jump.webp"
						width="272"
						alt="jump"
						height="420"
					></Image>
					<div className="left-[32px] bottom-8 md:top-[344px] absolute text-light-400 text-32-bold tracking-tight  !leading-10">
						&quot;Cree en ti.&quot;
					</div>
				</div>
			</div>
		</section>
	);
}

export default ThreeImages;
