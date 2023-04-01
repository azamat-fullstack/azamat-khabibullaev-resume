import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 page not found</h1>
      <Link to="/">Go to Home</Link>
    </div>
  )
}

export default NotFound
