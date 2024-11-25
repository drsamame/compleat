import Link from 'next/link';
import React from 'react';

function ProductBanner() {
	return (
		<div className="hidden w-full mb-28 relative bg-bannerProduct bg-[length:100%] justify-between items-center lg:items-center px-4 py-10 lg:px-[60px] lg:py-[50px] lg:h-[489px] rounded-[40px] flex-col-reverse lg:flex-row md:flex gap-4">
			<div className="left">
				<div className="w-[357px] h-52 p-8 bg-light-400 rounded-lg flex-col justify-start items-start gap-4 inline-flex">
					<div className="max-w-[306px] text-32-regular leading-10">
						Nuestros mejores complementos.
					</div>
					<Link
						href="/"
						className="px-8 py-4 bg-base rounded-[40px] justify-center items-center gap-2 inline-flex text-light-400 text-16-bold leading-none tracking-tight"
					>
						Quiero conocer más
					</Link>
				</div>
			</div>

			<div className="invisible lg:visible  arrow-banner left-2/4 bottom-[-20px] ml-[-24px] absolute cursor-pointer"></div>
		</div>
	);
}

export default ProductBanner;
