import { compareDesc, parseISO } from "date-fns";
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

export function cn(...inputs) {
   return twMerge(clsx(inputs))
}


export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};

