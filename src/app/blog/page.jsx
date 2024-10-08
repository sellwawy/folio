import { allPosts } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'
import PostsCard from '../../components/ui/PostCard'

// console.log(allPosts[0].image)

const posts = allPosts.map((post, index) => <PostsCard {...post} key={index} />)

// const posts = allPosts.sort((a, b) =>
//   compareDesc(new Date(a.date), new Date(b.date))
// );

function Blog(post) {
   return <div className="mb-8">{posts}</div>
}

export default Blog
