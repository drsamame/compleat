'use client';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { HamburgerMenu } from './HamburgerMenu';

function NavBar() {
	const [openNavigation, setOpenNavigation] = useState(false);
	const toggleNavigation = () => {
		if (openNavigation) {
			setOpenNavigation(false);
			enablePageScroll();
		} else {
			setOpenNavigation(true);
			disablePageScroll();
		}
	};
	const handleClick = () => {
		if (!openNavigation) return;
		enablePageScroll();
		setOpenNavigation(false);
	};
	return (
		<div
			className={`lg:relative lg:h-auto  w-full lg:left-0 lg:w-full lg:top-0 z-50 
	   lg:bg-n-8/90 lg:backdrop-blur-sm ${
				!openNavigation
					? 'bg-light-400'
					: 'bg-opacity-95 h-[100vh] bg-base backdrop-blur-sm'
			}`}
		>
			<nav
				className={`bg-light-400 rounded-b-[20px] lg:rounded-b-none w-full py-2 lg:py-4  justify-center items-center lg:gap-6 flex-col lg:flex-row lg:inline-flex `}
			>
				<div
					className={`${
						openNavigation ? 'border-b-[1px] border-gray-200' : ''
					} flex lg:hidden px-6 h-16 flex-row justify-between items-center `}
				>
					<Image
						width="105"
						height="41"
						src="/images/logo_negro.webp"
						alt="logo"
					/>
					<div className="flex items-baseline gap-5">
						<Image
							width="20"
							height="21"
							src="/images/glyph_shopping.webp"
							alt="logo compra"
						/>
						<button className="-mt-[3px] relative" onClick={toggleNavigation}>
							<HamburgerMenu openNavigation={openNavigation} />
						</button>
					</div>
				</div>
				<div
					className={`${
						openNavigation ? ' flex' : 'hidden'
					} flex-col lg:flex-row lg:flex`}
				>
					<div className="flex-col lg:flex-row  justify-center items-center lg:gap-6 flex">
						<Link
							href="/producto"
							className="nav-link"
							onClick={handleClick}
						>
							Complementos
						</Link>
						<Link href="clinica" className="nav-link" onClick={handleClick}>
							Nuestra clínica
						</Link>
						<Link href="/nosotros" className="nav-link" onClick={handleClick}>
							¿Quiénes somos?
						</Link>
					</div>
					<div className="lg:flex hidden w-[166px] h-[41px] px-[30px] justify-center items-center">
						<div className="grow shrink basis-0 self-stretch pl-[0.20px] pr-[0.03px] pt-[0.19px] pb-[0.05px] justify-center items-center inline-flex">
							<div className="w-[105.77px] h-[40.77px] relative">
								<Image
									width="105"
									height="41"
									src="/images/logo_negro.webp"
									alt="logo"
								></Image>
							</div>
						</div>
					</div>
					<div className="justify-start items-center gap-5 lg:gap-4 flex lg:flex-row flex-col">
						<div className="w-full lg:w-auto  flex-col lg:flex-row grow shrink basis-0  justify-start items-center lg:gap-6 flex">
							<Link href="blog" className="nav-link" onClick={handleClick}>
								Nuestro Blog
							</Link>
							<Link href="/contacto" className="nav-link" onClick={handleClick}>
								Contáctanos
							</Link>
						</div>
						<div className=" w-full lg:w-auto flex justify-center lg:justify-start items-center gap-3">
							<div className="lg:flex hidden  px-1 py-0.5 justify-center items-center ">
								<Image
									width="20"
									height="21"
									src="/images/glyph_shopping.webp"
									alt="logo compra"
									className="max-w-none"
								/>
							</div>
							<Link
								href="buscar-pedido"
								className="w-[90%] mb-4 lg:mb-auto lg:w-auto px-4 py-4 lg:py-2 bg-base text-12-bold  rounded-[40px] justify-center items-center gap-1 flex text-light-400 text-base lg:text-12-bold tracking-wide"
							>
								Rastrea tu pedido
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
