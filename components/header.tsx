import { cn, formatDate } from '@/lib/utils';
import CountdownTimer from './countdownTimer';
import { MoveRight } from 'lucide-react';

interface Props {
	roomId: string;
	dateEstimate?: Date;
	dateAllVote?: DateVote;
}

const Header = (props: Props) => {
	return (
		<header className='py-2 rounded-lg border-4 bg-background border-foreground space-y-2'>
			<h1 className='font-bold text-2xl text-center'>Đi chơi sóc sơn</h1>
			{props.dateEstimate && (
				<p className='text-center flex gap-1 items-center justify-center'>
					({props.dateAllVote ? 'Ngày đi đã chốt: ' : 'Ngày đi dự kiến:'}
					<span
						className={cn({
							'line-through border-2 rounded-md border-foreground px-1 bg-background':
								props.dateAllVote,
						})}
					>
						{formatDate(props.dateEstimate, 'dd/MM/yyyy')}
					</span>
					{props.dateAllVote && (
						<>
							<MoveRight />
							<span className='border-2 rounded-md border-foreground px-1 bg-background font-medium'>
								{formatDate(props.dateAllVote.date, 'dd/MM/yyyy')}
							</span>
						</>
					)}
					)
				</p>
			)}
			{(props.dateEstimate || props.dateAllVote) && (
				<CountdownTimer
					date={props.dateAllVote?.date || props.dateEstimate}
					className='item-center justify-center'
				/>
			)}
		</header>
	);
};

export default Header;
