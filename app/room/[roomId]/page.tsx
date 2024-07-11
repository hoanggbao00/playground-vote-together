import CustomDialog from '@/components/custom-dialog';
import FormAddItem from '@/components/form-add';
import Header from '@/components/header';
import PasswordPrompt from '@/components/ui/password-otp/index';
import PostCard from '@/components/post-card';
import PostCardAdd from '@/components/post-card-add';
import Sidebar from '@/components/sidebar';
import SidebarSkeleton from '@/components/skeleton/sidebar-skeleton';
import { Button, buttonVariants } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { SampleRoomData } from '@/lib/sample';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { Suspense } from 'react';

interface Props {
	params: { roomId: string };
	searchParams: { collapsed?: boolean; isCreate?: boolean, pwd?: string };
}

const page = (props: Props) => {
	const { roomId } = props.params;
	let password = props.searchParams.pwd;
	const { collapsed } = props.searchParams;

	const dateAllVote =
		SampleRoomData.dateVotes &&
		SampleRoomData.dateVotes.find(
			(v) => v.votes && v.votes.length === SampleRoomData.users.length
		);

	return (
		<div className='lg:container flex gap-3'>
			<Suspense fallback={<SidebarSkeleton />}>
				<Sidebar data={SampleRoomData} />
			</Suspense>
			<Dialog>
				<div className='space-y-3'>
					<Header
						roomId={SampleRoomData.roomId}
						dateEstimate={SampleRoomData.dateEstimate}
						dateAllVote={dateAllVote}
					/>
					<section className='min-h-[50dvh] w-full p-2'>
						<div
							className={cn(
								'grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-5',
								{
									'md:grid-cols-3': collapsed,
								}
							)}
						>
							<PostCard />
							<PostCard />
							<PostCard />
							<PostCard />
							<DialogTrigger>
								<PostCardAdd />
							</DialogTrigger>
						</div>
					</section>
				</div>
				<div className='fixed bottom-5 right-2'>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<DialogTrigger
									className={buttonVariants({
										size: 'icon',
										className:
											'!bg-background !text-foreground !border-2 !rounded-lg !border-foreground',
									})}
								>
									<Plus />
								</DialogTrigger>
							</TooltipTrigger>
							<TooltipContent>
								<p>Thêm mới</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
				<CustomDialog
					title={'Thêm mới'}
					className='pr-2'
					dialogFooter={
						<Button type='submit' form='formAdd'>
							Thêm
						</Button>
					}
				>
					<FormAddItem />
				</CustomDialog>
			</Dialog>
			<PasswordPrompt roomId={roomId} password={password}/>
		</div>
	);
};

export default page;
