import Link from 'next/link';
import TrackingForm from '@/app/components/forms/TrackingForm';

function page() {
	return (
		<div className="max-w-[1120px] min-h-[700px] bg-light-400 mx-auto pb-20">
			<ul className="mt-6 text-base text-12-light inline-flex gap-2 leading-none tracking-tight">
				<li className="after:content-[>]">
					<Link className="" href="/">
						Home
					</Link>
				</li>
				<li className="">&#62;</li>
				<li className="">Rastrea tu pedido</li>
			</ul>
			<h6 className="text-base text-32-regular mt-4 leading-10">
				Rastrea tu pedido
			</h6>
			<p className="text-gray-300 mt-4 text-16-regular leading-7 tracking-wide">
				Para saber en que estado esta tu pedido, por favor ingresa el código que
				te enviamos a tu correo cuando realizaste la compra.
			</p>
			<TrackingForm />
		</div>
	);
}

export default page;
