'use client';
import { Delete } from 'lucide-react';
import { Button } from '../button';
import { cn } from '@/lib/utils';

interface Props {
	input: string;
	setInput: (value: string) => void;
	className?: string;
}

const NumberButton = (props: Props) => {
	return (
		<Button
			className={cn(
				'border-2 border-foreground w-10 h-10 text-lg bg-background hover:bg-foreground/20 text-foreground font-medium rounded-lg',
				props.className
			)}
			size='icon'
			onClick={() => props.setInput(props.input)}
		>
			{props.input === 'delete' ? <Delete /> : props.input}
		</Button>
	);
};

export default NumberButton;
