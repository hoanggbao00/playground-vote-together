import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}

const SocialButton = (props: Props) => {
	return (
		<Button
			type='button'
			className={cn(
				'bg-background hover:bg-muted p-1 px-2 border-2 border-foreground rounded-lg text-foreground min-w-14 w-fit',
				props.className
			)}
		>
			{props.text}
		</Button>
	);
};

export default SocialButton;
