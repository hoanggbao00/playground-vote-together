import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatDate(date: Date, type: 'dd/MM/yyyy' | 'dd/MM' = 'dd/MM') {
	let dd: any = date.getDate();
	let mm: any = date.getMonth() + 1;

	if (dd < 10) dd = '0' + dd;
	if (mm < 10) mm = '0' + mm;

	if(type == 'dd/MM')
		return dd + '/' + mm;

	if(type == 'dd/MM/yyyy')
		return dd + '/' + mm + '/' + date.getFullYear();
}