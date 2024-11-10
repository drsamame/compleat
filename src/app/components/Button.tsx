import React from 'react';
import Image from 'next/image';

interface Props {
	isLoading: boolean;
	className?: string;
	children: React.ReactNode;
	asChild?: boolean;
}

function SubmitButton({ isLoading, className, children }: Props) {
	return (
		<button
			type="submit"
			disabled={isLoading}
			className={className ?? 'btn-primary w-full'}
		>
			{isLoading ? (
				<div className="flex items-center gap-4 ">
					<Image
						src="/assets/icons/loader.svg"
						alt="loader"
						width={24}
						height={24}
						className="animate-spin"
					/>
					Cargando...
				</div>
			) : (
				children
			)}
		</button>
	);
}

export default SubmitButton;
