import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import loader from '/public/loader.svg';

interface Props {
	isLoading: boolean;
	className?: string;
	children: React.ReactNode;
	asChild?: boolean;
}

function SubmitButton({
	isLoading,
	className,
	children,
	asChild = false,
}: Props) {
	return (
		<Button
			asChild={asChild}
			type="submit"
			disabled={isLoading}
			className={`px-8 text-center rounded-full h-12 ${className}`}
		>
			{isLoading ? (
				<div className="flex items-center gap-4 ">
					<Image
						src={loader}
						alt="loader"
						width={24}
						height={24}
						className="animate-spin"
					/>
					Cargando
				</div>
			) : (
				children
			)}
		</Button>
	);
}

export default SubmitButton;
