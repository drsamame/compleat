import React from 'react';
import Link from 'next/link';

function Services() {
	return (
		<section className="w-full bg-gray-400 py-[100px] mx-auto  relative flex-col justify-center items-center gap-12 inline-flex">
			<div className="container flex items-start justify-center flex-col">
				<h3 className="w-96 mx-auto lg:w-auto text-[40px] lg:text-48-regular text-center leading-[56px]  mb-[48px]">
					Explora nuestros servicios
				</h3>
				<div className="self-stretch justify-start items-center gap-6 flex-col lg:flex-row inline-flex">
					<div className="bg-service1 service-box">
						<div className="w-[100%] lg:h-[104px] gap-4 lg:gap-9 px-6 py-5 bg-white rounded-[20px]  lg:justify-between lg:items-center items-start flex flex-col lg:flex-row ">
							<div className="flex-col justify-center items-start gap-3 inline-flex">
								<div className="text-base text-xl lg:text-24-light leading-7 tracking-wide">
									Clínica especializada
								</div>
								<div className="justify-start items-start gap-2 inline-flex">
									<div className="text-14-regular mt-0 lg:mt-2 text-sm leading-normal tracking-wider">
										Atención con especialistas
									</div>
								</div>
							</div>
							<div className="py-2.5 bg-white/0 rounded-lg justify-center items-center gap-1 flex">
								<Link
									className="text-orange text-14-bold text-sm leading-none tracking-wider"
									href={'/'}
								>
									Conocer más
								</Link>
							</div>
						</div>
					</div>
					<div className=" bg-service2 service-box">
						<div className="w-[100%] lg:h-[104px] gap-4 lg:gap-9 px-6 py-5 bg-white rounded-[20px]  lg:justify-between lg:items-center items-start flex flex-col lg:flex-row ">
							<div className="flex-col justify-center items-start gap-3 inline-flex">
								<div className="text-base text-xl lg:text-24-light leading-7 tracking-wide">
									Clínica especializada
								</div>
								<div className="justify-start items-start gap-2 inline-flex">
									<div className="text-14-regular mt-0 lg:mt-2 text-sm leading-normal tracking-wider">
										Atención con especialistas
									</div>
								</div>
							</div>
							<div className="py-2.5 bg-white/0 rounded-lg justify-center items-center gap-1 flex">
								<Link
									className="text-orange text-14-bold text-sm leading-none tracking-wider"
									href={'/'}
								>
									Conocer más
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
