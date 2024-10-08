import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '../../components/posts/getPostMetadata';

// Meta Tags for SEO
export async function generateMetadata(props) {
   const slug = props.params.slug;
   const post = getPostContent(slug);
   return {
      title: post.data.title,
      description: post.data.teaser,
   };
}

// Get post content
const getPostContent = (slug) => {
   const folder = 'posts/';
   const file = `${folder}${slug}.md`;
   const content = fs.readFileSync(file, 'utf8');
   const matterResult = matter(content);
   return matterResult;
};
// Get post metadata
export const generateStaticParams = async () => {
   const posts = getPostMetadata();
   return posts.map((post) => ({
      slug: post.slug,
   }));
};

const PostPage = (props) => {
   const slug = props.params.slug;
   const post = getPostContent(slug);
   return (
      <div className="bg-clr-primary pb-28 pt-28">
         <div className=" pb-7 text-center">
            <h1 className="text-2xl text-clr-tertiary  ">{post.data.title}</h1>
            <p className="mt-2 text-clr-secondary">{post.data.date}</p>
         </div>
         <article className="wrapper prose text-base text-clr-secondary">
            <Markdown>{post.content}</Markdown>
         </article>
      </div>
   );
};

export default PostPage;
