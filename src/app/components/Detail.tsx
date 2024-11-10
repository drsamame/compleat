import React from 'react';
import Image from 'next/image';

const properties = [
	{
		title: '¿CÓMO FUNCIONA 01?',
		image: '/images/prop1.webp',
		description:
			'What is Website Architecture — How to Build a Search-Friendly Site',
	},
	{
		title: '¿CÓMO FUNCIONA 02?',
		image: '/images/prop3.webp',
		description:
			'What is Website Architecture — How to Build a Search-Friendly Site',
	},
	{
		title: '¿CÓMO FUNCIONA 03?',
		image: '/images/prop2.webp',
		description:
			'What is Website Architecture — How to Build a Search-Friendly Site',
	},
];

function Detail() {
	return (
		<section className="container gap-9 lg:flex pt-20">
			<div className="max-w-[300px] lg:max-w-[400px]">
				<h3 className="!leading-[56px] text-[40px] lg:text-48-regular tracking-tight">
					Energía, bienestar y salud en cada dosis
				</h3>
				<button className="my-5  lg:mt-11 w-[163px] btn-primary block">
					¡Lo quiero!
				</button>
			</div>
			<div className=" xl:w-[630px] ml-auto">
				{properties.map(({ image, title, description }, idx) => (
					<div
						key={title}
						className={`flex lg:items-center lg:flex-row flex-col mb-8  pb-8 ${
							idx + 1 != properties.length ? 'border-b-gray-200 border-b' : ''
						}`}
					>
						<Image
							src={image}
							width="170"
							height="140"
							alt="images chica vestido naranja"
						/>
						<div className="lg:ml-8 mt-7 lg:mt-0 flex flex-col">
							<h6 className="mb-3 text-14-bold text-gray-300 tracking-widest">
								{title}
							</h6>
							<p className="text-20-regula tracking-[0.04px]">{description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Detail;
