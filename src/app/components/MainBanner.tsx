import React from 'react';
import Image from 'next/image';

function MainBanner() {
	return (
		<div className="w-full mb-28 relative justify-between items-center lg:items-center px-4 py-10 lg:px-[60px] lg:py-[50px] lg:h-[489px] bg-gray-500 rounded-[40px] flex-col-reverse lg:flex-row flex gap-4">
			<div className="left">
				<p className="text-base text-14-bold mb-2 font-[600]  leading-tight tracking-wide">
					ÓXIDO NITRICO
				</p>
				<h2 className="max-w-md lg:max-w-[450px] mb-[20px] tracking-[-0.2px]">
					<span className="text-[40px] font-bold leading-[48px] lg:text-56-bold block lg:leading-[64px]">
						Suplementos que cambiaran
					</span>
					<span
						data-text="tu vida"
						className="text-[40px] font-bold lg:text-56-bold relative inline text-box-degrade !leading-[40px]"
					>
						<span className="text-degrade">tu vida</span>
					</span>
				</h2>
				<button className="mt-10 !py-2 lg:!py-[14px] w-[52%] lg:w-[144px] !text-sm btn-primary text-16-bold inline-block">
					¡Lo quiero!
				</button>
				<button className="ml-4 inline-block w-[40%] lg:hidden mt-10 !py-2 !px-2 !text-sm btn-outline text-16-bold">
					Ver casos
				</button>
			</div>
			<div className="max-w-md lg:max-w-[550px] mb-5 lg:mb-auto w-full flex justify-start lg:justify-center">
				<div className="self-stretch lg:self-auto w-32 lg:w-[262px] lg:h-[390px] background-black-orange rounded-[140px] flex justify-center items-center mr-6">
					<Image
						className="h-auto w-20 lg:w-auto"
						src="/images/oxido_nitrico_big.webp"
						width="181"
						alt="oxido nitrico producto"
						height="205"
					></Image>
				</div>
				<div className="w-32  lg:w-[262px] lg:h-[390px]">
					<Image
						className="h-auto "
						src="/images/chica_banner.webp"
						width="256"
						alt="oxido nitrico producto"
						height="390"
					></Image>
				</div>
			</div>
			<div className="invisible lg:visible  arrow-banner left-2/4 bottom-[-20px] ml-[-24px] absolute cursor-pointer"></div>
		</div>
	);
}

export default MainBanner;
