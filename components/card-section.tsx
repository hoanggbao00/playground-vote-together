'use client';

import { cn } from '@/lib/utils';
import { forwardRef, Ref } from 'react';

interface Props {
	children?: React.ReactNode;
	title: string;
	text?: string;
	titleClass?: string;
	className?: string;
}

const CardSection = forwardRef<HTMLDivElement, Props>((props, ref) => {
	return (
		<div
			className={cn(
				'border-2 rounded-md border-red-400 p-1 relative !mt-5 text-foreground',
				props.className
			)}
			ref={ref}
		>
			<span
				className={cn(
					'absolute -top-4 -left-2 bg-red-500 border-red-800 border-2 rounded-lg px-2 text-destructive-foreground',
					props.titleClass
				)}
			>
				{props.title}
			</span>
			<div className='pt-1.5'>
				{props.children && props.children}
				{props.text && <p className='line-clamp-2'>{props.text}</p>}
			</div>
		</div>
	);
});

export default CardSection;
