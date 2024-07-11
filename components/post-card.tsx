'use client';

import { useRef, useState } from 'react';
import CardSection from './card-section';
import { Button, buttonVariants } from './ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './ui/dialog';
import { Check, Plus } from 'lucide-react';
import SocialButton from './dialog-detail/social-button';
import { ProgressDate } from './progressDate';
import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {}

const PostCard = (props: Props) => {
	const contentRef = useRef<HTMLDivElement>(null);
	const [isVote, setVote] = useState(false);
	const searchParams = useSearchParams();
	const router = useRouter();

	function handleClose() {
		let pathname = window.location.pathname;
		const queryParams = new URLSearchParams(window.location.search);
		if (queryParams.get('post')) queryParams.delete('post');
		else queryParams.append('post', '123456');

		pathname += `?${queryParams.toString()}`;
		router.replace(pathname);
	}

	return (
		<Dialog defaultOpen={!!searchParams.get('post')} onOpenChange={handleClose}>
			<article className='rounded-lg border-4 border-foreground bg-background text-foreground'>
				<div className=' -mt-4 -ml-2.5 flex gap-1 items-center text-background'>
					<h2 className='rounded-lg px-2 py-1 bg-green-300 border-4 border-foreground font-bold text-lg line-clamp-2'>
						Căn nhỏ 2 ngủ asd asd ajsd asd asdasdasd asd sa das dasd as dasdasd
					</h2>
					<div className='rounded-lg p-2 bg-green-300 border-4 border-foreground font-bold text-lg grid place-items-center h-fit'>
						12
					</div>
				</div>
				<div className='p-2 text-background space-y-1.5'>
					<div className='aspect-square w-full bg-foreground rounded-lg'>
						Image
					</div>
					<CardSection
						title='Giá'
						titleClass='bg-yellow-300 text-black border-yellow-800'
					>
						<ul>
							<li>T2 - T5: 1.800.000</li>
							<li>T6 - CN: 2.400.000</li>
							<li>T7: 4.000.000</li>
						</ul>
					</CardSection>
					<CardSection
						title='Tiện ích'
						titleClass='bg-sky-400 border-sky-800'
						ref={contentRef}
					>
						<div className='max-h-40 overflow-clip'>
							tiện ích <br />
							tiện íchtiện ích <br />
							tiện íchtiện ích <br />
							tiện íchtiện ích <br />
							tiện íchtiện ích <br />
							tiện íchtiện ích <br />
							tiện íchtiện ích <br />
							tiện íchmax-h-44
						</div>
						{contentRef.current && contentRef.current.clientHeight >= 170 && (
							<p className='text-foreground absolute bottom-0 bg-gradient-to-t from-foreground/70 to-background/70 w-full left-0 rounded-br-md rounded-bl-md text-center text-sm'>
								Xem thêm...
							</p>
						)}
					</CardSection>
					<CardSection
						title='Ghi chú'
						text='asd asd ajsd asd asdasdasd asd sa das dasd as dasdasd'
					/>
					<div className='grid grid-cols-2 gap-2'>
						<DialogTrigger className={buttonVariants()}>Chi tiết</DialogTrigger>
						<Button>Facebook</Button>
					</div>
				</div>
			</article>
			<DialogContent
				className='border-4 border-foreground rounded-lg pt-0 pb-2 px-0'
				showClose={false}
			>
				<DialogHeader className='border-4 rounded-lg border-foreground bg-green-300 -mt-4 -ml-2 w-[103%] py-2 relative'>
					<DialogTitle className='text-center'>Chi tiết</DialogTitle>
					<DialogDescription className='text-center'>
						<p>Người thêm: Bảo</p>
						<p>Còn trống ngày: 25/07, 28/07, 26/07</p>
					</DialogDescription>
				</DialogHeader>
				<div className='px-2 pr-9 h-[60vh] overflow-y-auto'>
					<p>
						Chi tiết chi tiết chi tiết chi tiết chi tiết chi tiết tiết chi tiết
						tiết chi tiết tiết chi tiết
					</p>
					<p>Chi tiết chi tiết chi tiết chi tiết chi tiết</p>
				</div>
				<DialogFooter className='px-2'>
					<div className='flex gap-2 w-full items-center'>
						<Button
							className={cn({
								'bg-green-300 text-green-800 hover:bg-green-500': isVote,
							})}
							onClick={() => setVote(!isVote)}
						>
							{isVote ? (
								<>
									<Check /> Đã vote
								</>
							) : (
								<>
									<Plus /> Vote
								</>
							)}
						</Button>
						<div className='w-full space-y-1'>
							<ProgressDate value={50} indicatorClassName='bg-primary' />
							<p className='text-sm text-muted-foreground'>
								Bảo, Hiếu, Linh trang và 3 người khác đã vote
							</p>
						</div>
					</div>
				</DialogFooter>
				<div className='absolute -top-6 -right-[5.5rem] font-medium text-sm space-y-1 w-28 h-full'>
					<DialogClose className='block border-2 bg-red-500 border-foreground text-destructive-foreground rounded-lg min-w-14 w-fit p-1 px-2 hover:bg-red-400'>
						Đóng
					</DialogClose>
					<Button className='block bg-orange-400 hover:bg-orange-700 p-1 px-2 border-2 border-foreground rounded-lg min-w-14 w-fit'>
						Sửa
					</Button>
					<Button className='block bg-muted hover:bg-white p-1 px-2 border-2 border-destructive rounded-lg text-destructive min-w-14 w-fit'>
						Xóa
					</Button>
					<div className='space-y-1 h-2/3 overflow-hidden !mt-5'>
						<SocialButton text='Instagram' />
						<SocialButton text='Facebook' />
						<SocialButton text='Booking' />
						<SocialButton text='Traveloka' />
						<SocialButton text='Threads' />
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default PostCard;
