import React from 'react';
import ig from '/public/images/ig.webp';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
	type: string;
	image: string;
	title: string;
	description: string;
	phrase: string;
	link: string;
	igLink: string;
}

function Personal({
	image,
	title,
	description,
	phrase,
	link,
	igLink,
	type,
}: Props) {
	return (
		<div
			className={`w-full  py-12 ${type == 'a' ? 'bg-white' : 'bg-gray-400'}  `}
		>
			<div className="container justify-center items-center gap-6 md:gap-[120px] md:flex-row flex-col flex">
				<div className="max-w-[453px] rounded-[40px]  justify-center items-center flex">
					<Image
						className="rounded-3xl"
						src={image}
						width={450}
						height={620}
						alt="flavio quincot"
					/>
				</div>
				<div className="max-w-[548px] flex-col justify-start items-start gap-5 inline-flex">
					<div className="flex-col justify-start items-start gap-6 flex">
						<h4 className=" text-base text-28-regular md:text-40-regular ">{title}</h4>
						<p className=" text-[#0c0c0c]  -mt-2 text-16-light  tracking-wide">
							Super trainer
						</p>
						<article className=" text-gray-300 text-16-light !leading-6 tracking-wide">
							{description}
						</article>
						<hr
							className={`w-full ${
								type == 'a' ? ' border-light-400' : 'border-light-300'
							}   h-[1px]  border-b border-t-0`}
						/>
						<h6 className="text-base text-20-bold text-xl  leading-normal tracking-wide">
							{phrase}
						</h6>
					</div>
					<div className=" justify-start items-center my-4 gap-4 inline-flex">
						<Image src={ig} alt="flavio quincot" />
						<div className="flex-col justify-start items-start inline-flex">
							<div className="text-base  leading-8 text-24-regular">
								{title}
							</div>
							<Link
								passHref={true}
								href={link}
								className="text-gray-300 text-14-light tracking-wider leading-wide"
							>
								{igLink}
							</Link>
						</div>
					</div>
					<div className="flex-col justify-start items-start gap-2 flex">
						<button className="px-8 py-4 bg-base text-light-400 text-base  leading-none tracking-wide rounded-[40px] justify-center items-center gap-2 inline-flex">
							Quiero una sesión
						</button>
						<div className="text-gray-300 text-12-light tracking-widest">
							Sesiones vía Zoom o Google meet
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Personal;
