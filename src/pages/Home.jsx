import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      
      
      <h1 className="text-4xl w-fit mx-auto font-bold text-blue-500">
        Web Dev / React Workshop
      </h1>

      <Link to="/about">About</Link>
    </div>
  )
}

export default Home
