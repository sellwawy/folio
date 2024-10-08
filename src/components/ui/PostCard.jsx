import Link from 'next/link'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'

export default function PostsCard({
   title,
   description,
   slug,
   publishedAt,
   category,
}) {
   return (
      <article className="rounded-lg shadow-custom">
         <h3 className="text-xl font-bold">
            <Link href={`/blog/${slug}`}>{title}</Link>
         </h3>
         <div className="flex items-center">
            <Link href={`/blog/${category}`}>{category}</Link>
            <time dateTime={publishedAt}>
               {format(parseISO(publishedAt), 'LLLL d, yyyy')}
            </time>
         </div>
         <p>{description}</p>
      </article>
   )
}
