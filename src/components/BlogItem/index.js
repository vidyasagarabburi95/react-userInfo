// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, description, publishedDate} = blogDetails
  return (
    <li key={id}>
      <div className="title-publication">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
