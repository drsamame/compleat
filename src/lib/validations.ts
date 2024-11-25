import { z } from 'zod';

export const trackOrderFormValidation = z.object({
	trackid: z
		.string()
		.min(2, 'Debe tener al menos 2 caracteres.')
		.max(9, 'Debe tener 9 caracteres.'),
});

export const contactFormValidation = z.object({
	name: z
		.string()
		.min(2, 'Debe tener al menos 2 caracteres.')
		.max(50, 'Debe tener menos de 50 caracteres.'),
	lastname: z
		.string()
		.min(2, 'Debe tener al menos 2 caracteres.')
		.max(50, 'Debe tener menos de 50 caracteres.'),
	message: z
		.string()
		.min(2, 'Debe tener al menos 2 caracteres.')
		.max(250, 'Debe tener menos de 250 caracteres.'),
	email: z.string().email('Debe ser un correo válido.'),
	phone: z
		.string()
		.refine((phone) => /^9\d{8}$/.test(phone), 'Número de teléfono inválido')
		.optional(),
});
