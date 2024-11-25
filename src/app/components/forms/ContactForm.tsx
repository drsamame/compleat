'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomFormField, { FormFieldType } from '@/components/CustomFormField';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormValidation } from '@/lib/validations';
import { Form } from '@/components/ui/form';
import { z } from 'zod';
import SubmitButton from '@/components/SubmitButton';

function ContactForm({ className }: { className?: string }) {
	const [isLoading, setIsLoading] = useState(false);
	const form = useForm<z.infer<typeof contactFormValidation>>({
		resolver: zodResolver(contactFormValidation),
		defaultValues: {
			name: '',
			lastname: '',
			phone: '',
			message: '',
			email: '',
		},
	});
	async function onSubmit(values: z.infer<typeof contactFormValidation>) {
		setIsLoading(true);
		console.log(values);
		setTimeout(function () {
			setIsLoading(false);
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
			<section className="w-full">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className={className ?? 'space-y-1 mt-4  pb-4 '}
					>
						<div className="flex flex-col gap-6 xl:flex-row">
							<CustomFormField
								fieldType={FormFieldType.INPUT}
								control={form.control}
								name="name"
								label="Nombre"
								placeholder="Ingresa tu nombre"
							/>
							<CustomFormField
								fieldType={FormFieldType.INPUT}
								control={form.control}
								name="lastname"
								label="Apellido"
								placeholder="Ingresa tu apellido"
							/>
						</div>

						<div className="flex flex-col gap-6 xl:flex-row">
							<CustomFormField
								fieldType={FormFieldType.INPUT}
								control={form.control}
								name="email"
								label="Email"
								placeholder="Ingresa tu email"
							/>
							<CustomFormField
								fieldType={FormFieldType.INPUT}
								control={form.control}
								name="phone"
								label="Celular o teléfono"
								placeholder="Ingresa tu número"
							/>
						</div>
						<CustomFormField
							fieldType={FormFieldType.TEXTAREA}
							control={form.control}
							name="message"
							label="Déjanos tu consulta"
							placeholder="Escribe tu mensaje"
						/>
						<SubmitButton className="!mt-8" isLoading={isLoading}>
							Enviar
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
		</>
	);
}

export default ContactForm;
