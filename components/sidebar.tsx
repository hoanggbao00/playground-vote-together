'use client';

import { AlignJustify, ChevronLeft, Plus } from 'lucide-react';
import Card from './card';
import { Button } from './ui/button';
import UserDetail from './user-detail';
import DateVotes from './ListDateVote';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface Props {
	data: RoomData;
}

const Sidebar = (props: Props) => {
	const { data } = props;
	const [isCollapsed, setCollapsed] = useState(false);
	const [selected, setSelected] = useState('');
	const router = useRouter();

	useEffect(() => {
		const storage = window.localStorage.getItem('room-list');
		if (!storage) return;
		const storageData = JSON.parse(storage) as RoomLocal[];

		const room = storageData.find((r) => r.roomId === data.roomId);
		if (!room) return;

		if (room.selected) setSelected(room.selected);
	}, []);

	useEffect(() => {
		let pathname = window.location.pathname;
		const queryParams = new URLSearchParams(window.location.search);
		if (isCollapsed) queryParams.append('collapsed', 'true');
		else queryParams.delete('collapsed');

		pathname += `?${queryParams.toString()}`;
		router.replace(pathname);
	}, [isCollapsed]);

	return (
		<aside className='fixed md:sticky top-0 bottom-0 z-50'>
			{!isCollapsed && (
				<div
					className='inset-0 bg-black/50 fixed md:hidden md:invisible'
					onClick={() => setCollapsed((e) => !e)}
				></div>
			)}
			<div
				className={cn('h-full w-72 flex flex-col gap-4 transition-all', {
					'w-0 invisible': isCollapsed,
				})}
			>
				<Card
					className='md:max-w-[300px]'
					title={`Danh sách thành viên (${data.users.length})`}
				>
					{selected && (
						<div className='font-bold mb-2 text-xl'>Chào, {selected}</div>
					)}
					<div className='flex flex-col gap-2 max-h-[40vh] overflow-auto'>
						{data.users
							.filter((v) => v !== selected)
							.map((user) => (
								<UserDetail name={user} key={user} />
							))}
					</div>
				</Card>
				<Card className='md:max-w-[300px]' title='Bình chọn ngày'>
					{data.dateVotes ? (
						<DateVotes data={data.dateVotes} userLength={data.users.length} />
					) : (
						<div className='space-y-1'>
							<p>Chưa có dữ liệu</p>
							<Button
								variant='outline'
								className='rounded-full border-2 border-foreground'
							>
								<Plus size='18' /> Thêm mới
							</Button>
						</div>
					)}
				</Card>
			</div>
			<button
				className='absolute border-2 border-foreground bg-background text-foreground inline-block text-center p-0.5 w-fit rounded-lg top-3 -right-7 z-10'
				onClick={() => setCollapsed(!isCollapsed)}
			>
				{isCollapsed ? <AlignJustify /> : <ChevronLeft />}
			</button>
		</aside>
	);
};

export default Sidebar;
