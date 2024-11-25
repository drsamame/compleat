import JoinUs from '@/components/JoinUs';
import React from 'react';
import Image from 'next/image';

function OurTeam() {
	return (
		<>
			<div className="justify-center w-full items-start bg-white  mb-16 inline-flex py-8 md:py-24">
				<div className="container flex gap-0 md:gap-[70px]">
					<div className="max-w-full md:max-w-[546px] flex-col justify-start items-start gap-[83px] inline-flex">
						<div className="flex-col justify-start items-start gap-10 flex">
							<h1 className="text-base text-28-regular md:text-48-regular md:!leading-[56px]">
								Tenemos una{' '}
								<span className="text-degrade !top-0">promesa </span>
								con nuestros clientes
							</h1>

							<p className="text-gray-300 !leading-[32px] text-16-light tracking-wide">
								Nos comprometemos a ofrecer productos de alta calidad y
								respaldados por la ciencia. Tu satisfacción es nuestra
								prioridad. Juntos, avanzamos hacia un estilo de vida más
								saludable. ¡Tu éxito es nuestro éxito!
							</p>
						</div>
						<div className="self-stretch h-[318px] flex-col justify-start items-start gap-8 flex">
							<div className="self-stretch justify-start items-start gap-6 inline-flex">
								<div className="p-3 bg-[#e9ecef] rounded-[60px] justify-start items-center gap-2.5 flex">
									<Image
										src="/images/love.webp"
										alt="corazón"
										width={32}
										height={32}
									></Image>
								</div>
								<div className="grow shrink basis-0 flex-col justify-start items-start gap-[15px] inline-flex">
									<div className="text-base text-28-regular tracking-tight">
										Nuestra visión
									</div>
									<h3 className="text-gray-300 !leading-[28px] text-16-light tracking-wide">
										Ser un referente en bienestar, promoviendo hábitos
										saludables y empoderando a las personas para transformar su
										salud con un enfoque personalizado
									</h3>
								</div>
							</div>
							<div className="self-stretch justify-start items-start gap-6 inline-flex">
								<div className="p-3 bg-[#e9ecef] rounded-[60px] justify-start items-center gap-2.5 flex">
									<Image
										src="/images/ray.webp"
										alt="corazón"
										width={32}
										height={32}
									></Image>
								</div>
								<div className="grow shrink basis-0 flex-col justify-start items-start gap-[15px] inline-flex">
									<div className="text-base text-28-regular tracking-tight">
										Nuestra misión
									</div>
									<h3 className="text-gray-300 !leading-[28px] text-16-light tracking-wide">
										Brindar asesoramiento personalizado para ayudar a los
										pacientes a alcanzar sus objetivos de salud y promover
										hábitos alimenticios sostenibles.
									</h3>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden md:block overflow-hidden">
						<Image
							alt="chicas gimnasio"
							className="-right-6 relative block pb-6 rounded-[20px]"
							src="/images/promise.webp"
							width={694}
							height={621}
						/>
					</div>
				</div>
			</div>
			<div className="container mt-0 mb-16">
				<div className="max-w-[1120px] bg-light-400 mx-auto ">
					<JoinUs />
				</div>
			</div>
		</>
	);
}

export default OurTeam;
