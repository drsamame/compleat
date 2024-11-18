import React from 'react';
import Image from 'next/image';

function SecondaryBanner() {
	return (
		<div className=" relative bg-degradem md:bg-degrade lg:bg-[center_top_0rem] bg-[center_top_-1rem] bg-[length:104%_107%] lg:bg-cover mt-[84px] max-w-[930px] mx-auto block overflow-hidden h-auto lg:h-[218px] px-8 lg:px-14 py-10 rounded-[40px] flex-col justify-center items-start gap-8">
			<div className="lg:w-[48px] lg:h-[48px] w-[40px] h-[40px] rounded-full absolute bg-orange justify-center flex items-center right-[31px] top-[24px]">
				<Image
					width={32}
					height={32}
					src="/images/glyph_heart.webp"
					alt="estrella"
				></Image>
			</div>
			<div className=" px-2 py-1 bg-white rounded-lg justify-center items-center gap-2.5 inline-flex mb-[32px]">
				<div className="text-base text-12-bold leading-[18px] tracking-wide ">
					PROMESA
				</div>
			</div>
			<p className="w-[240px] lg:w-auto lg:m-w-[795px] text-light-400 lg:text-32-bold leading-10">
				Con cada esfuerzo, te acercas a tu mejor versión Empieza hoy y
				transforma tu vida.
			</p>
		</div>
	);
}

export default SecondaryBanner;
