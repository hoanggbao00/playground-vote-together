import { cn } from '@/lib/utils';

interface Props {
	children: React.ReactNode;
	className?: string;
	title?: string;
}

const Card = (props: Props) => {
	return (
		<div
			className={cn(
				'rounded-lg border-black border-4 bg-background relative',
				props.className
			)}
		>
			<p className='text-background bg-green-300 rounded-lg border-4 absolute -top-1 -left-1 -right-1 font-bold px-2 text-lg overflow-hidden z-[2] border-foreground'>
				{props.title || 'Tiêu đề của card'}
			</p>
			<div className='pt-9 px-2 pb-2'>{props.children}</div>
		</div>
	);
};

export default Card;
