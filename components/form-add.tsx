'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import NovelEditor from './NovelEditor/novel-editor';

const formSchema = z.object({
	title: z
		.string()
		.min(5, {
			message: 'Tiêu đề tối thiểu 5 ký tự',
		})
		.max(50, { message: 'Tiêu đề tối đa 50 ký tự' }),
	description: z.string().nullish(),
	note: z.string().nullish(),
	price: z.string(),
	urls: z.array(z.object({ value: z.string().url('Đường dẫn không hợp lệ') })),
});
type FormValues = z.infer<typeof formSchema>;

const defaultValues: Partial<FormValues> = {
	title: '',
	description: '',
	note: '',
	price: '',
	urls: [],
};

interface Props {}

const FormAddItem = (props: Props) => {
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues,
		mode: 'onChange',
	});

	const [isCollapsed, setCollapsed] = useState(false);

	const {
		fields: urlFields,
		append: urlAppend,
		remove: removeUrl,
	} = useFieldArray({
		name: 'urls',
		control: form.control,
	});

	function onSubmit(data: FormValues) {
		console.log(data);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} id='formAdd'>
				<div className='space-y-1 border-4 rounded-lg border-foreground p-2 absolute left-2 right-2 top-8 bg-background z-10'>
					<FormField
						control={form.control}
						name='title'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='flex gap-4 items-center'>Tiêu đề <FormMessage /></FormLabel>
								<FormControl>
									<Input placeholder='Tiêu đề' {...field} />
								</FormControl>
								
							</FormItem>
						)}
					/>
					<Button
						type='button'
						onClick={() => setCollapsed(!isCollapsed)}
						size='icon'
						className='bg-green-300 text-foreground border-2 border-foreground absolute w-6 h-6 -bottom-3 mx-auto left-1/2 -translate-x-1/2'
					>
						{isCollapsed ? <ChevronUp size='18' /> : <ChevronDown size='18' />}
					</Button>
					<div
						className={cn('h-0 invisible', { 'h-fit visible': isCollapsed })}
					>
						<FormField
							control={form.control}
							name='price'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Giá thuê</FormLabel>
									<FormControl>
										<Input placeholder='(1.800.000 ~ 2.000.000)' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='note'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Ghi chú</FormLabel>
									<FormControl>
										{/* @ts-ignore */}
										<Input placeholder='Ghi chú' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className='mt-2 max-h-[35vh] overflow-auto'>
							{urlFields.map((field, index) => (
								<FormField
									control={form.control}
									key={field.id}
									name={`urls.${index}.value`}
									render={({ field }) => (
										<FormItem className='space-y-1 !flex-[2.5]'>
											<FormLabel className={cn(index !== 0 && 'sr-only')}>
												URL
											</FormLabel>
											<FormDescription className={cn(index !== 0 && 'sr-only')}>
												Đường link (liên kết) dẫn tới bài chi tiết
											</FormDescription>
											<div className='flex gap-1'>
												<FormControl>
													<Input {...field} />
												</FormControl>
												<Button
													size={'icon'}
													onClick={() => removeUrl(index)}
													type='button'
												>
													X
												</Button>
											</div>
											<FormMessage />
										</FormItem>
									)}
								/>
							))}
							<Button
								type='button'
								variant='outline'
								size='sm'
								className='mt-2'
								onClick={() => urlAppend({ value: '' })}
							>
								Thêm liên kết tới bài viết
							</Button>
						</div>
					</div>
				</div>
				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem className='ml-1 mt-24'>
							<FormLabel>Tiện ích</FormLabel>
							<FormMessage />
							<FormControl className='border-2 border-foreground p-2 rounded-lg'>
								{/* @ts-ignore */}
								<NovelEditor onChange={field.onChange} className='pl-6 pt-4'/>
							</FormControl>
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
};

export default FormAddItem;
