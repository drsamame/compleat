import React from 'react';
import nutri from '/public/images/nutri.webp';
import consult from '/public/images/consult.webp';
import analisis from '/public/images/analisis.webp';
import apli from '/public/images/apli.webp';

import Image from 'next/image';

function OurService() {
	return (
		<div className="py-[100px] flex-col justify-start items-start gap-[50px] flex">
			<div className="flex-col justify-center items-start gap-5 flex">
				<h2 className="text-32-bold md:text-48-regular text-base leading-[56px]">
					Nuestros servicios en Clínica
				</h2>
				<p className=" text-gray-600 text-16-light text-base !leading-7 tracking-wide">
					Ofrecemos servicios nutricionales personalizados, que incluyen
					evaluaciones, planificación de comidas y talleres. Nuestro objetivo es
					ayudarte a lograr tus metas de salud y bienestar. ¡Contáctanos para
					empezar!
				</p>
			</div>
			<div className="grid gap-6 md:grid-cols-2">
				<div className="p-8 rounded-3xl border-2 border-gray-400 justify-start items-start gap-6 flex">
					<div className="w-14 md:w-[100px] p-[14.08px] md:p-[24.08px] bg-[#0d6efd] rounded-[125px] justify-center items-center gap-[24.08px] flex">
						<Image src={nutri} alt="nutri" />
					</div>
					<div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
						<h3 className=" text-base text-24-bold leading-7 tracking-wide">
							Consultoría de nutrición
						</h3>
						<div className=" text-gray-600 text-16-light text-base leading-7 tracking-wide">
							Ofrecemos consultoría de nutrición personalizada para ayudarte a
							alcanzar tus objetivos de salud con planes de alimentación
							adaptados y apoyo constante
						</div>
						<button className="px-8 py-4 bg-base text-light-400 text-base  leading-none tracking-wide rounded-[40px] justify-center items-center gap-2 inline-flex">
							Agregar al carrito
						</button>
					</div>
				</div>
				<div className="p-8 rounded-3xl border-2 border-gray-400 justify-start items-start gap-6 flex">
					<div className="w-14 md:w-[100px] p-[14.08px] md:p-[24.08px] bg-[#FFC107] rounded-[125px] justify-center items-center gap-[24.08px] flex">
						<Image src={consult} alt="consult" />
					</div>
					<div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
						<h3 className=" text-base text-24-bold leading-7 tracking-wide">
							Análisis de sangre
						</h3>
						<div className=" text-gray-600 text-16-light text-base leading-7 tracking-wide">
							El análisis de sangre evalúa tu salud y detecta condiciones
							específicas, proporcionando información clave sobre nutrientes y
							función orgánica. ¡Esencial para un diagnóstico preciso!
						</div>
						<button className="px-8 py-4 bg-base text-light-400 text-base  leading-none tracking-wide rounded-[40px] justify-center items-center gap-2 inline-flex">
							Agregar al carrito
						</button>
					</div>
				</div>
				<div className="p-8 rounded-3xl border-2 border-gray-400 justify-start items-start gap-6 flex">
					<div className="w-14 md:w-[100px] p-[14.08px] md:p-[24.08px] bg-[#20C997] rounded-[125px] justify-center items-center gap-[24.08px] flex">
						<Image src={apli} alt="apli" />
					</div>
					<div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
						<h3 className=" text-base text-24-bold leading-7 tracking-wide">
							Aplicación de nutritivos
						</h3>
						<div className=" text-gray-600 text-16-light text-base leading-7 tracking-wide">
							La aplicación de Nutritivos te ayuda a llevar un estilo de vida
							saludable con recetas, seguimiento de hábitos alimenticios y
							consejos personalizados. ¡Empieza a transformar tu alimentación
							hoy!
						</div>
						<button className="px-8 py-4 bg-base text-light-400 text-base  leading-none tracking-wide rounded-[40px] justify-center items-center gap-2 inline-flex">
							Agregar al carrito
						</button>
					</div>
				</div>
				<div className="p-8 rounded-3xl border-2 border-gray-400 justify-start items-start gap-6 flex">
					<div className="w-14 md:w-[100px] p-[14.08px] md:p-[24.08px] bg-[#FD7E14] rounded-[125px] justify-center items-center gap-[24.08px] flex">
						<Image src={analisis} alt="analisis" />
					</div>
					<div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
						<h3 className=" text-base text-24-bold leading-7 tracking-wide">
							Aplicación de nutritivos
						</h3>
						<div className=" text-gray-600 text-16-light text-base leading-7 tracking-wide">
							La aplicación de Nutritivos te ayuda a llevar un estilo de vida
							saludable con recetas, seguimiento de hábitos alimenticios y
							consejos personalizados. ¡Empieza a transformar tu alimentación
							hoy!
						</div>
						<button className="px-8 py-4 bg-base text-light-400 text-base  leading-none tracking-wide rounded-[40px] justify-center items-center gap-2 inline-flex">
							Agregar al carrito
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OurService;
