'use client';

import JoinDialog from '@/components/join-dialog';
import { buttonVariants } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SampleRoomData } from '@/lib/sample';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

const Homepage = () => {
	const [isLoading, setLoading] = useState(false);
	const [value, setValue] = useState('');
	const [password, setPassword] = useState('');
	const [data, setData] = useState(SampleRoomData);

	async function Join(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setLoading(true);

		try {
			
		} catch (err) {
			alert('Lỗi!');
		} finally {
			setLoading(false);
		}
	}

	return (
		<Dialog>
			<p className='z-[-10] fixed inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></p>
			<div className='flex items-center justify-center h-screen'>
				<div className='min-w-[500px] text-white'>
					<form className='flex flex-col gap-2 items-center' onSubmit={Join}>
						<Label className='font-bold text-xl ' htmlFor='roomId'>
							Nhập ID phòng
						</Label>
						<Input
							type='text'
							name='roomId'
							id='roomId'
							placeholder='Nhập id phòng'
							className='placeholder-white'
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
						<Input
							type='password'
							name='roomPassword'
							id='roomPassword'
							placeholder='Nhập mật khẩu'
							className='placeholder-white'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<DialogTrigger
							type='submit'
							className={buttonVariants({
								className: 'w-full select-none',
							})}
							disabled={isLoading || !value || !password}
						>
							{isLoading && (
								<Loader2 size='18' className='animate-spin text-white mr-2' />
							)}
							Tham gia
						</DialogTrigger>

						{data && <JoinDialog data={data} />}
					</form>
				</div>
			</div>
		</Dialog>
	);
};

export default Homepage;
