'use client';

import * as React from 'react';

import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export function ProgressDate({ value, className, indicatorClassName }: { value: number, className?: string, indicatorClassName?: string}) {
	const [progress, setProgress] = React.useState(10);

	React.useEffect(() => {
		const timer = setTimeout(() => setProgress(value), 500);
		return () => clearTimeout(timer);
	}, []);

	return <Progress value={progress} className={cn(className)} indicatorClassName={indicatorClassName}/>;
}
