'use client';
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from '@/components/ui/input-otp';
import { REGEXP_ONLY_DIGITS } from 'input-otp';

interface Props {
	password?: string;
	setPassword: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const PasswordOTP = (props: Props) => {
	return (
		<InputOTP
			maxLength={6}
			pattern={REGEXP_ONLY_DIGITS}
			value={props.password}
			onChange={(value) => props.setPassword(value)}
			className='w-full select-none'
		>
			<InputOTPGroup>
				<InputOTPSlot index={0} className='w-16 h-16 font-bold text-4xl'/>
				<InputOTPSlot index={1} className='w-16 h-16 font-bold text-4xl'/>
				<InputOTPSlot index={2} className='w-16 h-16 font-bold text-4xl'/>
				<InputOTPSlot index={3} className='w-16 h-16 font-bold text-4xl'/>
				<InputOTPSlot index={4} className='w-16 h-16 font-bold text-4xl'/>
				<InputOTPSlot index={5} className='w-16 h-16 font-bold text-4xl'/>
			</InputOTPGroup>
		</InputOTP>
	);
};

export default PasswordOTP;
