import React from 'react';
import Image from 'next/image';

function ThreeImages() {
	return (
		<section className="max-w-[1120px] flex items-center mt-12 mb-24">
			<div className="mx-auto justify-center h-[420px]  gap-8 inline-flex">
				<div className="max-w-[512px] h-[420px] relative">
					<Image
						className="h-auto w-20 lg:w-auto"
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
				<div className="max-w-[272px] h-[420px] relative">
					<Image
						className="h-auto w-20 lg:w-auto"
						src="/images/run.webp"
						width="272"
						alt="run"
						height="420"
					></Image>
					<div className="left-[32px] top-[300px] absolute text-light-400 text-32-bold tracking-tight !leading-10">
						&quot;Supera
						<br />
						tus límites.&quot;
					</div>
				</div>
				<div className="max-w-[272px] h-[420px] relative">
					<Image
						className="h-auto w-20 lg:w-auto"
						src="/images/jump.webp"
						width="272"
						alt="jump"
						height="420"
					></Image>
					<div className="left-[32px] top-[344px] absolute text-light-400 text-32-bold tracking-tight  !leading-10">
						&quot;Cree en ti.&quot;
					</div>
				</div>
			</div>
		</section>
	);
}

export default ThreeImages;
