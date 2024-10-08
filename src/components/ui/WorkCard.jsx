import Image from 'next/image'
import Link from 'next/link'
import { cn } from '../../utils'

function WorkCard({
   projectName,
   details,
   imageSrc,
   previewIcons,
   techIcons,
   className,
}) {
   return (
      <div
         className={cn(
            'flex max-w-fit flex-col rounded-lg border border-gray-200 bg-quinary shadow-custom max-md:max-w-96',
            className,
         )}>
         <div>
            <Image
               src={imageSrc}
               alt="John doe"
               placeholder="blur"
               className="rounded-t-lg object-cover"
            />
            <div className="rounded-lg p-spacing-7">
               <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {projectName}
               </h3>
               <p className="text-gray-700">{details}</p>
            </div>
         </div>
         <div className="mt-auto flex justify-between px-spacing-7 pb-spacing-7">
            <div className="flex gap-spacing-3">
               {previewIcons.map((item, index) => (
                  <Link href="/" key={index}>
                     {item}
                  </Link>
               ))}
            </div>
            <div className="flex gap-spacing-3">
               {techIcons.map((item, index) => (
                  <Link href="/" key={index}>
                     {item}
                  </Link>
               ))}
            </div>
         </div>
      </div>
   )
}

export default WorkCard
