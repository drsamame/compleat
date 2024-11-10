'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React from 'react';
import Image from 'next/image';

const settings = {
	dots: false,
	speed: 500,
	infinite: true,
	centerMode: true,
	centerPadding: '15%',
	slidesToShow: 2,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
			},
		}
	],
};
const slideItems = [
	{
		name: 'Charlotte S.',
		star: 4,
		image: '/images/person1.svg',
		desc: `Working with PixeSaaS was a game-changer for our business. The
        Cloud Solutions website they designed is a testament to their
        expertise in UI/UX. Our clients love the seamless experience,
        and we&apos;ve seen a significant boost in user.`,
	},
	{
		name: 'Javier M.',
		star: 4,
		image: '/images/person3.svg',
		desc: `Working with PixeSaaS was a game-changer for our business. The
        Cloud Solutions website they designed is a testament to their
        expertise in UI/UX. Our clients love the seamless experience,
        and we&apos;ve seen a significant boost in user.`,
	},
	{
		name: 'Ellen M. Jackson',
		star: 4,
		image: '/images/person2.svg',
		desc: `Working with PixeSaaS was a game-changer for our business. The
        Cloud Solutions website they designed is a testament to their
        expertise in UI/UX. Our clients love the seamless experience,
        and we&apos;ve seen a significant boost in user.`,
	},
	{
		name: 'Charlie S1.',
		star: 4,
		image: '/images/person3.svg',
		desc: `Working with PixeSaaS was a game-changer for our business. The
        Cloud Solutions website they designed is a testament to their
        expertise in UI/UX. Our clients love the seamless experience,
        and we&apos;ve seen a significant boost in user.`,
	},
	{
		name: 'Ellen M. Jackson2',
		star: 4,
		image: '/images/person1.svg',
		desc: `Working with PixeSaaS was a game-changer for our business. The
        Cloud Solutions website they designed is a testament to their
        expertise in UI/UX. Our clients love the seamless experience,
        and we&apos;ve seen a significant boost in user.`,
	},
];
function Testimonial() {
	return (
		<div className="w-full overflow-hidden ">
			<h2 className="w-80 lg:w-auto text-48-regular mx-auto text-left lg:text-center mb-[48px] mt-28">
				Lo que dicen nuestros clientes satisfechos.
			</h2>
			<Slider {...settings} className=" mb-28">
				{slideItems.map(({ name, star, image, desc }) => (
					<div className="slick-slide" key={name}>
						<div className="mx-4 b-1 self-stretch bg-white border border-[#ced4da] rounded-[20px] p-8">
							<div className="flex gap-6 justify-between items-start">
								<article>
									<h6 className="text-18-bold mb-2">{name}</h6>
									<div className="flex">
										{Array(star)
											.fill(null)
											.map((val, idx) => (
												<div key={idx} className="bg-star w-6 h-6 " />
											))}
									</div>
								</article>
								<Image
									src={image}
									width={56}
									height={56}
									alt="person-image"
								></Image>
							</div>

							<div className="mt-6">
								<p className="text-16-light text-gray-300 !leading-7">{desc}</p>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default Testimonial;
