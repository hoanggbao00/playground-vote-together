import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface Props {
	avatar?: string;
	name: string;
	className?: string;
}

const UserDetail = (props: Props) => {
	return (
		<div className={cn('flex gap-2 items-center', props.className)}>
			<div className='p-0.5 bg-black rounded-full'>
				<Avatar className='w-7 h-7'>
					<AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' className='z-0'/>
					<AvatarFallback>HB</AvatarFallback>
				</Avatar>
			</div>
			<p className='text-xl font-lg bg-secondary px-2 rounded-full border-2 border-black'>
				{props.name}
			</p>
		</div>
	);
};

export default UserDetail;
