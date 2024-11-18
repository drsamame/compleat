import Image from 'next/image';
import React from 'react';

function ItemProduct() {
	return (
		<div className="flex mx-auto p-10 rounded-[20px] border border-[#ced4da] justify-start items-start gap-8">
			<div className="max-w-[150px]  justify-center items-center flex">
				<div className="max-w-[150px]  bg-gradient-to-l from-[#fd2b14] via-[#fd4819] to-[#ffcb33] p-8 rounded-[32px]  relative">
					<Image
						className="h-auto w-20 lg:w-auto"
						src="/images/oxido_nitrico_big.webp"
						width="181"
						alt="oxido nitrico producto"
						height="205"
					></Image>
				</div>
			</div>
			<div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
				<div className="self-stretch text-base text-40-regular tracking-tight">
					Quemador de grasa
				</div>
				<div className="self-stretch text-base text-14-regular  leading-normal tracking-wider">
					El Quemador de Grasa Premium potencia tu metabolismo y ayuda en la
					pérdida de peso. Con ingredientes naturales, aumenta la energía y
					suprime el apetito, ideal para complementar tu rutina de ejercicios.
					¡Transforma tu cuerpo y siéntete increíble!
				</div>
				<div className="justify-start items-center gap-5 inline-flex">
					<div className="px-8 py-4 rounded-[40px] border-2 border-base justify-center items-center gap-2 flex">
						<div className="text-base leading-none tracking-wide">
							Agregar al carrito
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ItemProduct;
