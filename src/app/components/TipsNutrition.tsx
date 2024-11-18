import React from 'react';
import Image from 'next/image';

function TipsNutrition() {
	return (
		<div className="py-[100px] bg-[#f8f9fa] flex-col  items-center gap-[50px] justify-start inline-flex">
			<div className="w-full flex-col justify-start items-start gap-1 flex">
				<h2 className=" text-base text-48-regular  !leading-[56px]">
					Tips para mejorar
					<br />
					tu nutrición
				</h2>
			</div>
			<div className="justify-start items-start gap-8 inline-flex">
				<Image
					className="rounded-[20px]"
					width={150}
					height={150}
					alt="coach"
					src="/images/person4.webp"
				/>
				<div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
					<div className=" text-16-light self-stretch text-gray-300  !leading-7 tracking-wide">
						Hidrátate bien y equilibra tus comidas con proteínas, carbohidratos
						y grasas saludables. Consume al menos cinco porciones de frutas y
						verduras al día y escucha a tu cuerpo.
					</div>
					<div className="flex-col justify-start items-start gap-[3px] flex">
						<div className="text-base text-16-regular leading-normal">
							Flavio Quincot
						</div>
						<div className="text-gray-300 text-12-regular leading-[18px]">
							Super Trainer
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TipsNutrition;
