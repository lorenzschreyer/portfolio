import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { POSTS_PATH, postFilePaths } from 'utils/mdx';
import { formatTimecode } from 'utils/timecode';

export { Articles as default } from './Articles';

export function getStaticProps() {
  const allPosts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { data, content } = matter(source);

    const { time } = readingTime(content);
    const timecode = formatTimecode(time);

    return {
      ...data,
      timecode,
      slug: filePath.replace(/\.mdx?$/, ''),
    };
  });

  const featured_en = allPosts.filter(post => post.slug.endsWith("en")).find(post => post.featured);
  const featured_de = allPosts.filter(post => post.slug.endsWith("de")).find(post => post.featured);

  const posts = allPosts
    .filter(post => post.slug !== featured_en.slug && post.slug !== featured_de.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    props: { posts, featured_en, featured_de },
  };
}
