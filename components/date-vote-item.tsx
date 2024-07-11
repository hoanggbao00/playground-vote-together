import { cn, formatDate } from '@/lib/utils';
import { ProgressDate } from './progressDate';

interface Props {
	data: DateVote;
	currentUser: string;
	userLength: number;
}

const DateVoteItem = (props: Props) => {
	const { creator, date, votes } = props.data;
	return (
		<div
			className={cn(
				'p-1 px-2 text-foreground rounded-lg border-foreground border-2 hover:bg-muted-foreground/50 hover:cursor-pointer bg-muted',
				{ 'bg-green-200': votes?.includes(props.currentUser) }
			)}
		>
			<div className='w-full pr-2 items-center justify-center'>
				<div className='flex gap-2'>
					<p className='font-bold'>{formatDate(date)}</p>
					<div className='w-full flex items-center'>
						<ProgressDate
							value={votes ? (votes.length / props.userLength) * 100 : 0}
						/>
					</div>
				</div>
				<div className=''>
					{votes && (
						<p className='text-sm'>
							{votes.length > 2
								? votes.slice(0, 2).join(', ') +
								  ' và ' +
								  (votes.length - 2) +
								  ' người đã vote'
								: `${votes.join(', ')} đã vote`}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default DateVoteItem;
