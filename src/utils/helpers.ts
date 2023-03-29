import { format } from 'date-fns'

export const isLink = (string: string) => /http|gmail/.test(string)
export const isEmail = (string: string) => /gmail/.test(string)

export const getDate = (date: Date) => format(date, 'MMM Y')
