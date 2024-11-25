import ContactBanner from '../components/ContactBanner';
import Image from 'next/image';
import ContactForm from '../components/forms/ContactForm';

function Contacto() {
	return (
		<section className="container mt-6">
			<ContactBanner />

			<div className="max-w-[1120px] pb-16 pt-16 mx-auto bg-[#f8f9fa] justify-center md:justify-start items-start lg:gap-[120px] gap-8 flex-col-reverse lg:flex-row flex">
				
				
				
				<div className="w-full mx-auto max-w-full md:max-w-[643px] flex-col justify-start items-start gap-2 md:gap-8 inline-flex">
					<ContactForm />
				</div>
				<div className="mx-auto w-[357px] h-[420px] relative">
					<div className="w-[357px] left-0 top-0 absolute">
						<div className="max-w-[512px] relative">
							<Image
								className="w-full"
								src="/images/persongymlargarge.webp"
								width="512" 
								alt="gym"
								height="420"
							></Image>
							<div className="left-[32px] bottom-[40px] absolute text-light-400 text-32-bold  tracking-tight !leading-10">
								&quot;El dolor
								<br />
								es temporal.&quot;
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contacto;
