'use client';
import { useEffect, useState } from 'react';
import {
	Dialog,
	DialogHeader,
	DialogTitle,
	DialogContent,
	DialogDescription,
} from '../dialog';
import PasswordOTP from './password-otp';
import NumberButton from './number-button';
import ListUser from './list-user';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
	roomId: string;
	password?: string;
}

const PasswordPrompt = (props: Props) => {
	const { roomId } = props;
	const [isAccepted, setAccepted] = useState<boolean>(false);
	const [password, setPassword] = useState(props.password);
	const [roomLocal, setRoomLocal] = useState<RoomLocal | undefined>();
	const [selected, setSelected] = useState('');
	const [showPassword, setShowPassword] = useState(!!!props.password);

	async function getRoomById(roomId: string) {
		const id = roomId.split('#')[0];
		try {
			const res = await fetch(`/api/room/${id}`);
			const data: RoomLocal = await res.json();

			setRoomLocal(data);

			// Set localStorage
			const storage = window.localStorage.getItem('room-list');

			if (!storage) {
				window.localStorage.setItem('room-list', JSON.stringify(data));
			} else {
				const storageData: RoomLocal[] = JSON.parse(storage);
				storageData.push(data);
				window.localStorage.setItem('room-list', JSON.stringify(storageData));
			}

			return data;
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		const main = async () => {
			let storage = window.localStorage.getItem('room-list');
			let storageData = storage && (JSON.parse(storage) as RoomLocal[]);
			let room: RoomLocal | undefined;

			if (!storage) {
				room = await getRoomById(roomId);
				if (!room) return console.log('otp:index:61: Không tìm thấy phòng');
				storageData = [{ ...room }];

				if (room && props.password === room.password) {
					return setAccepted(true);
				}
			}

			if (!storageData)
				return console.log('otp:index:69: Không có storageData');

			room = !room ? storageData.find((r) => r.roomId === roomId) : room;
			setRoomLocal(room);

			if (!room) return console.log('otp:index:74: Không tìm thấy phòng');

			if (room.selected) {
				setSelected(room.selected);
				return setAccepted(true);
			}

			// Check password từ url
			if (password && room.password === password) {
				setAccepted(true);
			}
		};

		main().catch((err) => console.log(err));

		return () => {
			false;
		};
	}, []);

	// Kiểm tra password thay đổi
	useEffect(() => {
		if (isAccepted || !roomLocal || !password) return setAccepted(false);
		if (password.length < 6 || password.length == 0) return setAccepted(false);

		if (roomLocal.password !== password) {
			setAccepted(false);
			setShowPassword(true)
			return alert("Sai mật khẩu")
		}

		if (!selected) {
			setAccepted(false);
			return alert('Vui lòng chọn người dùng');
		}

		setRoomLocal((prev) => ({ ...prev!, selected: selected }));

		let storage = window.localStorage.getItem('room-list');
		let storageData = storage && (JSON.parse(storage) as RoomLocal[]);

		if (!storageData) return;

		storageData = [
			...storageData.map((r) => {
				if (r.roomId === roomId) return { ...r, selected: selected };
				return r;
			}),
		];
		window.localStorage.setItem('room-list', JSON.stringify(storageData));

		setAccepted(true);
	}, [password, selected]);

	function setInput(value: string | 'delete') {
		if (value === 'clear') return setPassword('');

		if (value === 'delete') {
			if (password && password.length > 0)
				return setPassword(password.slice(0, -1));
			else return;
		}

		if (password && password.length >= 6) return;

		setPassword(`${password ? password : ''}${value}`);
	}

	return (
		<Dialog open={!isAccepted || !selected} key={'passwordInput'}>
			<DialogContent
				className='border-4 bg-background text-foreground border-foreground p-0 pb-4'
				showClose={false}
			>
				<DialogHeader className='bg-green-300 border-4 border-foreground text-foreground py-3 rounded-lg w-[103%] -ml-2 -mt-2'>
					<DialogTitle className='text-center text-xl'>
						Nhập mật khẩu
					</DialogTitle>
					<DialogDescription></DialogDescription>
				</DialogHeader>
				<div className='space-y-2 px-2'>
					<h3 className='font-bold text-xl text-center'>Bạn là ai?</h3>
					{roomLocal && (
						<ListUser
							selected={selected}
							setSelected={setSelected}
							users={roomLocal?.users}
							pwdShow={showPassword}
						/>
					)}
					<div className='flex justify-end gap-2'>
						<button
							className='select-none flex space-x-2 px-3 py-1 rounded-md hover:bg-muted text-muted-foreground text-sm items-center'
							onClick={() => setShowPassword(!showPassword)}
						>
							<p>{showPassword ? 'Ẩn nhập mật khẩu' : 'Nhập mật khẩu'}</p>
							{showPassword ? (
								<ChevronUp size={16} />
							) : (
								<ChevronDown size={16} />
							)}
						</button>
					</div>
					{showPassword && (
						<>
							<div className='flex item-center justify-center gap-2'>
								<PasswordOTP password={password} setPassword={setPassword} />
								<NumberButton
									setInput={setInput}
									input='delete'
									className='w-16 h-16 border-red-400 text-red-400'
								/>
							</div>
							<div className='flex gap-2 items-center justify-center mt-3'>
								<NumberButton setInput={setInput} input='0' />
								<NumberButton setInput={setInput} input='1' />
								<NumberButton setInput={setInput} input='2' />
								<NumberButton setInput={setInput} input='3' />
								<NumberButton setInput={setInput} input='4' />
								<NumberButton setInput={setInput} input='5' />
								<NumberButton setInput={setInput} input='6' />
								<NumberButton setInput={setInput} input='7' />
								<NumberButton setInput={setInput} input='8' />
								<NumberButton setInput={setInput} input='9' />
							</div>
						</>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default PasswordPrompt;
