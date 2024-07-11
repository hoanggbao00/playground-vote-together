import {
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useMemo, useState } from 'react';
import UserCard from './landing/user-card';
import { Button } from './ui/button';
import { Search, X } from 'lucide-react';

interface Props {
	data: Pick<RoomData, 'roomId' | 'roomName' | 'users' | 'dateEstimate'>;
}

const JoinDialog = (props: Props) => {
	const [nameValue, setNameValue] = useState('');
	const [selectedName, setSelectedName] = useState('');

	const filteredUsers = useMemo(
		() =>
			props.data.users.filter((user) =>
				user.toLowerCase().includes(nameValue.toLowerCase())
			),
		[nameValue]
	);

	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle className='text-center'>{props.data.roomName}</DialogTitle>
				<DialogDescription className='text-center'>
					<p>(RoomID: {props.data.roomId})</p>
					<p>
						Ngày khởi hành dự kiến:{' '}
						{props.data.dateEstimate.toISOString().split('T')[0]}
					</p>
				</DialogDescription>
			</DialogHeader>
			<div className='flex flex-col gap-2'>
				<div>
					<Label htmlFor='name'>Tên của bạn</Label>
					<div className='relative'>
						<Button
							size='icon'
							variant='ghost'
							className='absolute left-0 top-0 text-lg text-muted-foreground'
						>
							<Search size='18' />
						</Button>
						<Input
							type='text'
							id='name'
							name='name'
							onChange={(e) => {
								setSelectedName(e.target.value);
								setNameValue(e.target.value);
							}}
							onFocus={(e) => {
								e.target.value = selectedName;
							}}
							onBlur={(e) => {
								if (selectedName) e.target.value = '';
							}}
							value={nameValue}
							className='pl-8 text-md'
						/>
						{selectedName && (
							<p className='absolute top-1.5 left-8 text-md'>{selectedName}</p>
						)}
						{(nameValue || selectedName) && (
							<Button
								size='icon'
								variant='ghost'
								className='absolute right-0 top-0 text-lg'
								onClick={() => {
									setNameValue('');
									setSelectedName('');
								}}
							>
								<X size='18' />
							</Button>
						)}
					</div>
				</div>
				<div>
					<p className='font-medium select-none'>Danh sách thành viên</p>
					<div className='flex flex-col gap-1 max-h-[40vh] overflow-y-auto mt-1'>
						{filteredUsers &&
							filteredUsers.map((user) => (
								<UserCard name={user} key={user} setValue={setSelectedName} />
							))}
					</div>
				</div>
			</div>
			<DialogFooter>
				<Button className='w-full'>Tiếp tục</Button>
			</DialogFooter>
		</DialogContent>
	);
};

export default JoinDialog;
