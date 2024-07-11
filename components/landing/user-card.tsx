'use client';

interface Props {
	name: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
}

const UserCard = ({ name, setValue }: Props) => {
	return (
		<p
			className='p-2 bg-muted rounded-md hover:bg-muted/60 hover:cursor-pointer transition-colors'
			key={name}
			onClick={() => {
				setValue(name);
			}}
		>
			{name}
		</p>
	);
};

export default UserCard;
