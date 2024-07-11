import { Skeleton } from "../ui/skeleton";

const UserSkeleton = () => {
	return (
		<div className='flex items-center space-x-4 w-full'>
			<Skeleton className='h-10 w-10 rounded-full' />
			<div className='space-y-2 w-[80%]'>
				<Skeleton className='h-4 w-[100%]' />
				<Skeleton className='h-4 w-[80%]' />
			</div>
		</div>
	);
};

export default UserSkeleton;
