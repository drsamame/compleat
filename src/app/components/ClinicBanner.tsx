import Image from 'next/image';

function ClinicBanner() {
	return (
		<div className="w-full mb-14 relative bg-cover bg-clinicBanner  justify-between items-center lg:items-center px-4 py-10 lg:px-[60px] lg:py-[50px] lg:h-[470px] rounded-[40px] flex-col-reverse lg:flex-row hidden md:flex gap-4">
			<div className="left">
				<div className="max-w-[453px] p-8 bg-light-400 rounded-3xl flex-col justify-start items-start gap-4 inline-flex">
					<p className="text-32-regular !leading-10">
						Tenemos a los mejores{' '}
						<span className="bg-base ml-1 rounded-full inline-flex items-center justify-center  w-8 h-8  align-middle">
							<Image
								width={20}
								height={20}
								src="/images/raywhite.webp"
								alt="estrella"
							></Image>{' '}
						</span>
						<br />
						profesionales en nutrición y cuidado de salud
						<span className="bg-base rounded-full inline-flex items-center justify-center ml-2 w-8 h-8  align-middle">
							<Image
								width={18}
								height={18}
								src="/images/heartwhite.webp"
								alt="estrella"
							></Image>{' '}
						</span>
					</p>
				</div>
			</div>

			<div className="invisible lg:visible  arrow-banner left-2/4 bottom-[-20px] ml-[-24px] absolute cursor-pointer"></div>
		</div>
	);
}

export default ClinicBanner;
