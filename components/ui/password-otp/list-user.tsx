'use client';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '../button';

interface Props {
	users: string[];
	selected: string;
	setSelected: React.Dispatch<React.SetStateAction<string>>;
	pwdShow: boolean;
}

const ListUser = (props: Props) => {
	function handleSelected(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.target as HTMLFormElement);
		const user = formData.get('user') as string;

		if (!user) return;

		props.setSelected(user);
	}

	return (
		<div>
			{props.pwdShow ? (
				<div className='flex gap-3 flex-wrap flex-1 overflow-auto max-h-[6rem] py-2'>
					{props.users.map((user) => (
						<Button
							key={user}
							className={cn(
								'bg-muted hover:bg-green-300/80 text-foreground rounded-md cursor-pointer',
								{ 'bg-green-300': props.selected === user }
							)}
							onClick={() => props.setSelected(user)}
						>
							{user}
						</Button>
					))}
				</div>
			) : (
				<form onSubmit={handleSelected} className='flex gap-2 py-2' id='user'>
					<div className='flex gap-3 flex-wrap flex-1 overflow-auto max-h-[6rem]'>
						{props.users.map((user) => (
							<div key={user}>
								<input
									type='radio'
									id={user}
									name='user'
									value={user}
									defaultChecked={user === props.selected}
									hidden
									className='peer'
								/>
								<label
									htmlFor={user}
									className={cn(
										buttonVariants(),
										'bg-muted hover:bg-green-300/80 text-foreground rounded-md cursor-pointer peer-checked:bg-green-300'
									)}
								>
									{user}
								</label>
							</div>
						))}
					</div>
					<Button form='user'>Xác nhận</Button>
				</form>
			)}
		</div>
	);
};

export default ListUser;
