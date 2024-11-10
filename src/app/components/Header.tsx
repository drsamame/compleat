import React from 'react';
import Image from 'next/image';
import NavBar from '@/components/NavBar';

function Header() {
	return (
		<>
			<div className="w-full h-11 py-3 bg-base justify-center items-center gap-5 inline-flex">
				<div className="container mx-auto relative flex justify-center">
					<div className="w-5 h-5 justify-center items-center hidden lg:flex">
						<div className="relative flex-col justify-start items-start flex">
							<Image
								width="20"
								height="20"
								src="/images/glyph_star.webp"
								alt="estrella icono"
							/>
						</div>
					</div>
					<p className="text-[#f8f9fa] mx-5  text-xs !leading-[22px] tracking-[1px]">
						ENVÍO GRATIS POR COMPRAS MAYORES A S/90
					</p>
					<div className="w-5 h-5 justify-center items-center hidden lg:flex">
						<div className="relative flex-col justify-start items-start flex">
							<Image
								width="20"
								height="20"
								src="/images/glyph_star.webp"
								alt="estrella icono"
							/>
						</div>
					</div>
				</div>
			</div>
			<NavBar />
		</>
	);
}

export default Header;
