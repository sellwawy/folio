import { cn } from './../../utils'

function SectionHeading({ children, className }) {
   return (
      <h2
         className={cn(
            'pb-spacing-11 text-center text-3xl font-semibold uppercase tracking-widest text-primary',
            className,
         )}>
         {children}
      </h2>
   )
}

export default SectionHeading
