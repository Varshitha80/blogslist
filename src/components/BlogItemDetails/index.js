import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import './index.css'

const BlogItemDetails = () => {
  const [blogData, setBlogData] = useState({})
  const {id} = useParams()

  useEffect(() => {
    const getblockapicalls = async () => {
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
      const data = await response.json()
      const updateddata = {
        title: data.title,
        imageUrl: data.image_url,
        avatarUrl: data.avatar_url,
        content: data.content,
        author: data.author,
      }
      setBlogData(updateddata)
    }
    getblockapicalls()
  }, [id])

  const {title, imageUrl, content, avatarUrl, author} = blogData

  return (
    <div className="blog-container">
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    </div>
  )
}

export default BlogItemDetails
