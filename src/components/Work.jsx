import React from 'react'
import SectionHeading from './ui/SectionHeading'
import WorkCard from './ui/WorkCard'
import { workData } from '../constants/workData'

function Work() {
   const workCards = workData.map((item, index) => (
      <WorkCard
         className="justify-self-center"
         key={index}
         imageSrc={item.imageSrc}
         projectName={item.title}
         details={item.description}
         previewIcons={item.previewIcons}
         techIcons={item.techIcons}
      />
   ))

   return (
      <section id="work" className="bg-quaternary py-spacing-12">
         <div className="wrapper">
            <SectionHeading className="text-center">Work</SectionHeading>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-x-spacing-10 gap-y-spacing-10">
               {workCards}
            </div>
         </div>
      </section>
   )
}

export default Work
