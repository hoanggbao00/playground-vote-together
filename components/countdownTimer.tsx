'use client';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface Props {
	date: Date;
	className?: string;
}

const CountdownTimer = (props: Props) => {
	const [isExpired, setExpire] = useState(false);
	const [countdownTime, setCountdownTime] = useState({
		countdownDays: 0,
		countdownHours: 0,
		countdownMinutes: 0,
		countdownSeconds: 0,
	});

	const countdownTimer = () => {
		const timeInterval = setInterval(() => {
			const countdownDateTime = new Date(props.date).getTime();
			const currentTime = new Date().getTime();
			const remainingDayTime = countdownDateTime - currentTime;
			const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
			const totalHours = Math.floor(
				(remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const totalMinutes = Math.floor(
				(remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
			);
			const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

			const runningCountdownTime = {
				countdownDays: totalDays,
				countdownHours: totalHours,
				countdownMinutes: totalMinutes,
				countdownSeconds: totalSeconds,
			};

			setCountdownTime(runningCountdownTime);

			if (remainingDayTime < 0) {
				clearInterval(timeInterval);
				setExpire(false);
			}
		}, 1000);
	};

	useEffect(() => {
		countdownTimer();
	});

	return (
		<div className='flex items-center justify-center flex-col gap-2'>
			<div className={cn('flex gap-2', props.className)}>
				<div className='grid place-items-center'>
					<p className='font-bold text-xl'>Ngày</p>
					<div className='rounded-lg border-4 bg-background text-foreground border-foreground w-16 h-16 grid place-items-center font-medium text-xl'>
						{countdownTime.countdownDays}
					</div>
				</div>
				<div className='grid place-items-center'>
					<p className='font-bold text-xl'>Giờ</p>
					<div className='rounded-lg border-4 bg-background text-foreground border-foreground w-16 h-16 grid place-items-center font-medium text-xl'>
						{countdownTime.countdownHours}
					</div>
				</div>
				<div className='grid place-items-center'>
					<p className='font-bold text-xl'>Phút</p>
					<div className='rounded-lg border-4 bg-background text-foreground border-foreground w-16 h-16 grid place-items-center font-medium text-xl'>
						{countdownTime.countdownMinutes}
					</div>
				</div>

				<div className='grid place-items-center'>
					<p className='font-bold text-xl'>Giây</p>
					<div className='rounded-lg border-4 bg-background text-foreground border-foreground w-16 h-16 grid place-items-center font-medium text-xl'>
						{countdownTime.countdownSeconds}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountdownTimer;
