'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomFormField, { FormFieldType } from '@/components/CustomFormField';
import { zodResolver } from '@hookform/resolvers/zod';
import { trackOrderFormValidation } from '@/lib/validations';
import { Form } from '@/components/ui/form';
import { z } from 'zod';
import check from '/public/images/yes.webp';
import SubmitButton from '@/components/SubmitButton';
import Image from 'next/image';

function TrackingForm({ className }: { className?: string }) {
	const [isLoading, setIsLoading] = useState(false);
	const [result, setResult] = useState(true);
	const form = useForm<z.infer<typeof trackOrderFormValidation>>({
		resolver: zodResolver(trackOrderFormValidation),
		defaultValues: {
			trackid: '',
		},
	});
	async function onSubmit(values: z.infer<typeof trackOrderFormValidation>) {
		setIsLoading(true);
		setResult(false);
		console.log(values);
		setTimeout(function () {
			setIsLoading(false);
			setResult(true);
		}, 2000);
		// const response = 'response';
		// if (response.error) {
		// 	form.setError('root.serverError', {
		// 		message:
		// 			'Hubo un error al iniciar sesión, por favor verifica tus credenciales',
		// 		type: '400',
		// 	});
		// 	return;
		// }
	}
	return (
		<>
			<section className="max-w-[280px]">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className={className ?? 'space-y-1 mt-4  pb-4 '}
					>
						<CustomFormField
							fieldType={FormFieldType.INPUT}
							control={form.control}
							name="trackid"
							label="Código de compra"
							placeholder="Ingresa tu código"
						/>
						<SubmitButton className="!mt-3" isLoading={isLoading}>
							Buscar
						</SubmitButton>
						{form.formState.errors?.root?.serverError.type == 400 && (
							<p className="text-sm font-medium text-destructive shad-error">
								{form.formState.errors?.root?.serverError.message}
							</p>
						)}
					</form>
					<section />
				</Form>
			</section>

			{result && (
				<>
					<hr className="h-1 border-gray-200 mb-6" />
					<h5 className="text-base text-32-regular mb-6">
						Resultado de búsqueda
					</h5>
					<article className="flex-col overflow-hidden relative justify-start items-start gap-4 inline-flex ">
						<div className=" w-full left-[18px] z-0 absolute origin-top-left rotate-90 border border-[#ced4da]"></div>
						<div className="z-10 relative justify-start items-start gap-3 inline-flex">
							<div className="w-8 h-8 relative">
								<div className="w-8 h-8 left-0 top-0 absolute bg-[#28a745] rounded-full" />
								<Image
									className="w-3.5 h-2.5 left-[9px] top-[11px] absolute"
									src={check}
									alt="ok paso"
								/>
							</div>
							<div className="flex-col justify-start items-start gap-1 inline-flex">
								<div className=" text-[#28a745] text-16-regular leading-none   tracking-wide">
									Compra recibida
								</div>
								<div className=" text-gray-300 text-14-light leading-none tracking-wide">
									Hemos recibido tu compra correctamente
								</div>
							</div>
						</div>
						<div className="z-10 bg-light-400 relative justify-start items-start gap-3 inline-flex">
							<div className="w-8 h-8 p-2.5 rounded-[100px] border border-[#212529] justify-center items-center gap-2.5 flex">
								<span className="text-center text-[#212529] text-12-bold leading-none tracking-tight">
									02
								</span>
							</div>
							<div className="w-[276px] flex-col justify-start items-start gap-1 inline-flex">
								<div className=" text-16-regular leading-none   tracking-wide">
									Estamos preparando tu producto
								</div>
								<div className="  text-gray-300 text-14-light leading-none tracking-wide">
									Pronto tendrás tu producto
								</div>
							</div>
						</div>
						<div className="z-10 bg-light-400 relative justify-start items-start gap-3 inline-flex">
							<div className="w-8 h-8 p-2.5 rounded-[100px] border border-[#212529] justify-center items-center gap-2.5 flex">
								<span className="text-center text-[#212529] text-12-bold leading-none tracking-tight">
									03
								</span>
							</div>
							<div className="w-[276px] flex-col justify-start items-start gap-1 inline-flex">
								<div className=" text-16-regular leading-none   tracking-wide">
									El courrier está en camino
								</div>
								<div className="  text-gray-300 text-14-light leading-none tracking-wide">
									Se comunicarán contigo para la entrega
								</div>
							</div>
						</div>
						<div className="z-10 bg-light-400 relative justify-start items-start gap-3 inline-flex">
							<div className="w-8 h-8 p-2.5 rounded-[100px] border border-[#212529] justify-center items-center gap-2.5 flex">
								<span className="text-center text-[#212529] text-12-bold leading-none tracking-tight">
									02
								</span>
							</div>
							<div className="w-[276px] flex-col justify-start items-start gap-1 inline-flex">
								<div className=" text-16-regular leading-none   tracking-wide">
									Pedido entregado
								</div>
								<div className="  text-gray-300 text-14-light leading-none tracking-wide">
									Gracias por comprar en Compleat
								</div>
							</div>
						</div>
					</article>
				</>
			)}
		</>
	);
}

export default TrackingForm;
