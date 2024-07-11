import { cn } from '@/lib/utils';
import {
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from './ui/dialog';

interface Props {
	children: React.ReactNode;
	title: React.ReactNode | string;
	showClose?: boolean;
	closeText?: string;
	className?: string;
	dialogFooter?: React.ReactNode;
}

const CustomDialog = (props: Props) => {
	return (
		<DialogContent
			className='border-4 border-foreground rounded-lg pt-0 pb-2 px-0'
			showClose={false}
		>
			<DialogHeader className='border-4 rounded-lg border-foreground bg-green-300 -mt-4 -ml-2 w-[103%] py-2 relative'>
				{typeof props.title === 'string' ? (
					<DialogTitle className='text-center'>{props.title}</DialogTitle>
				) : (
					props.title
				)}
			</DialogHeader>
			<div
				className={cn('px-2 max-h-[60vh] pr-9 overflow-y-auto', props.className)}
			>
				{props.children}
			</div>
			<div className='absolute -top-6 -right-8 font-medium text-sm space-y-1 h-full'>
				<DialogClose className='block border-2 bg-red-500 border-foreground text-destructive-foreground rounded-lg min-w-14 w-fit p-1 px-2 hover:bg-red-400'>
					{props.closeText || 'Đóng'}
				</DialogClose>
			</div>
			{props.dialogFooter && <DialogFooter className='px-2'>{props.dialogFooter}</DialogFooter>}
		</DialogContent>
	);
};

export default CustomDialog;
