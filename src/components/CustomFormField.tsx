/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';
import { Control } from 'react-hook-form';
import Image from 'next/image';

export enum FormFieldType {
	INPUT = 'input',
	SKELETON = 'skeleton',
	TEXTAREA = 'textarea',
}

interface Props {
	control: Control<any>;
	fieldType: FormFieldType;
	iconSrc?: string;
	iconAlt?: string;
	disabled?: boolean;
	children?: React.ReactNode;
	name: string;
	label?: string;
	placeholder?: string;
	renderSkeleton?: (field: unknown) => React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: Props }) => {
	const { fieldType, iconSrc, iconAlt, placeholder, renderSkeleton } = props;
	switch (fieldType) {
		case FormFieldType.INPUT:
			return (
				<div className="flex mt-0 rounded-[6px] border border-[#495057] ">
					{iconSrc && (
						<Image
							src={iconSrc}
							height={24}
							alt={iconAlt || 'icon'}
							width={24}
							className="ml-2"
						/>
					)}
					<FormControl>
						<Input
							placeholder={placeholder}
							{...field}
							className="shad-input"
						></Input>
					</FormControl>
				</div>
			);
		case FormFieldType.TEXTAREA:
			return (
				<FormControl>
					<Textarea
						placeholder={placeholder}
						{...field}
						className="shad-textarea"
						disabled={props.disabled}
					></Textarea>
				</FormControl>
			);
		case FormFieldType.SKELETON:
			return renderSkeleton ? renderSkeleton(field) : null;
	}
	return <Input type="text" placeholder="Ej. Juan Pérez" />;
};

function CustomFormField(props: Props) {
	const { control, name, label } = props;
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className="flex-1 mb-5">
					{label && <FormLabel htmlFor={name}>{label}</FormLabel>}
					<RenderField field={field} props={props}></RenderField>
					<FormMessage className="shad-error" />
				</FormItem>
			)}
		/>
	);
}

export default CustomFormField;
