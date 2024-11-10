import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
	return (
		<footer className="bg-base flex w-full rounded-t-[20px]">
			<div className="container py-8 rounded-tl-3xl rounded-tr-3xl items-stretch justify-between  flex-col flex">
				<div className=" items-center justify-between flex-col lg:flex-row flex lg:inline-flex">
					<div className="max-w-[80%] w-full flex-col justify-start items-start inline-flex">
						<div className="flex-col justify-start items-start mt-7 flex">
							<Image
								width="123"
								height="49"
								src="/images/logo_blanco.webp"
								alt="logo"
							></Image>
							<p className="text-light-400 mt-4 lg:mt-9 mb-6 text-[18px] lg:text-20-regular leading-loose tracking-wide">
								Suscríbete a nuestro blog
							</p>
							<div className="text-light-400 w-[300px] lg:w-auto text-[40px] font-[400] lg:text-48-bold">
								Obtén 10% de dcto
							</div>
						</div>
						<div className=" w-full mt-5 px-5 py-4 pl-0 border-b border-light-400 flex-col justify-start items-start gap-2.5 flex">
							<div className="self-stretch justify-between items-center inline-flex">
								<input
									placeholder="Escribe tu email"
									type="text"
									className="text-light-400 tracking-wide px-4 bg-transparent text-base text-16-light leading-7 "
								></input>
								<div className="text-light-400 text-[16px] font-[700] lg:text-24-bold tracking-wide">
									Suscríbete
								</div>
							</div>
						</div>
					</div>
					<div className="flex-row lg:mt-0 mt-8 lg:flex-col justify-center items-center gap-[15px] inline-flex">
						<Link href="https://www.facebook.com/">
							<Image
								src="/images/facebook.webp"
								alt="facebook"
								width={35}
								height={35}
							/>
						</Link>

						<Link href="https://www.instagram.com/">
							<Image
								src="/images/instagram.webp"
								alt="instagram"
								width={35}
								height={35}
							/>
						</Link>
						<Link href="https://x.com/?lang=es">
							<Image
								src="/images/twitter.webp"
								alt="twitter"
								width={35}
								height={35}
							/>
						</Link>
						<Link href="https://www.linkedin.com">
							<Image
								src="/images/linkedin.webp"
								alt="linkedin"
								width={35}
								height={35}
							/>
						</Link>
					</div>
				</div>
				<div className=" pt-10 pb-5 bg-base justify-between items-center flex-col lg:flex-row flex lg:inline-flex">
					<div className="flex-wrap flex flex-row p-2.5 justify-center items-center gap-6 text-light-400  text-16-light">
						<Link href={'/'} className="footer-link">
							Complementos
						</Link>
						<Link href={'/'} className="footer-link">
							Nuestra clínica
						</Link>
						<Link href={'/'} className="footer-link">
							¿Quiénes somos?
						</Link>
						<Link href={'/'} className="footer-link">
							Nuestro Blog
						</Link>
						<Link href={'/'} className="footer-link">
							Contáctanos
						</Link>
					</div>
					<div className="justify-center items-center flex">
						<p className="text-green-blue text-16-regular mt-8 lg:mt-0 leading-7 tracking-wide">
							@2024 Compleat. Todos los derechos reservados
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
