import { Plus } from 'lucide-react';

import DateVoteItem from './date-vote-item';

interface Props {
	data: DateVote[];
	userLength: number;
}

const ListDateVote = (props: Props) => {
	const currentUser = 'Hiếu';
	return (
		<div>
			<div className='space-y-2 max-h-[35dvh] overflow-auto px-1'>
				{props.data.map(
					(dateVote, index) =>
						index <= 2 && (
							<DateVoteItem
								currentUser={currentUser}
								data={dateVote}
								key={dateVote.date}
								userLength={props.userLength}
							/>
						)
				)}
			</div>
			<button className='mt-2 border-2 rounded-full border-foreground mx-auto w-fit bg-foreground text-background flex px-3 py-1 hover:bg-foreground/20'>
				<Plus /> Thêm ngày
			</button>
		</div>
	);
};

export default ListDateVote;
