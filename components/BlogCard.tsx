type BlogItem = {
  title: string;
  content: string;
  image: string;
}

export default function BlogCard({ blogItem }: { blogItem: BlogItem }) {
  return (
    <div className="blog-card">
      <div className="blog-card__image">
        <img src={blogItem.image} alt={blogItem.title} />
      </div>
      <div className="blog-card__content">
        <h3>{blogItem.title}</h3>
        <p>{blogItem.content}</p>
      </div>
    </div>
  )
}