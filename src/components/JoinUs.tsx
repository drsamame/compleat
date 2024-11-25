import React from 'react';

function JoinUs() {
	return (
		<section className="w-full mb-28">
				<div className="w-full block mx-auto lg:w-full  px-7 lg:px-16 py-12 bg-gray-500 rounded-[32px] justify-center items-center gap-16 flex-col lg:flex-row lg:inline-flex">
					<div className="grow shrink basis-0 flex-col justify-center items-start gap-5  lg:inline-flex">
						<div className="self-stretch text-base text-40-regular  lg:mb-0 mb-5">
							Únete a nuestra comunidad
						</div>
						<div className="self-stretch mb-8 lg:mb-0 text-gray-300 text-base text-16-light tracking-tight">
							Aquí compartimos información para llevar un estilo de vida
							saludable
						</div>
					</div>
					<div className="w-full lg:w-[400px] flex-col justify-start items-start gap-6 inline-flex">
						<div className="self-stretch h-[68px] flex-col justify-start items-start gap-1 flex">
							<label className="self-stretch text-base text-14-semi-bold leading-none tracking-wider">
								Correo electrónico
							</label>
							<input className="self-stretch px-3 py-2.5 bg-[#f8f9fa] rounded-md border border-[#495057] justify-center items-center gap-2 inline-flex" />
						</div>
						<button className="w-full btn-primary block px-8 lg:py-4">
							Enviar mensaje
						</button>
					</div>
				</div>
		</section>
	);
}

export default JoinUs;
