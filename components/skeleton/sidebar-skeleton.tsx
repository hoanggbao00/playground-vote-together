import Card from '../card';
import UserSkeleton from './user-skeleton';

const SidebarSkeleton = () => {
	return (
		<div className='fixed top-0 bottom-0 w-[300px] flex flex-col gap-4'>
			<Card>
				<div className='space-y-2'>
					<UserSkeleton />
					<UserSkeleton />
					<UserSkeleton />
				</div>
			</Card>
		</div>
	);
};

export default SidebarSkeleton;
