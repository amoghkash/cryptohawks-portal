import { Link } from "react-router-dom"

function AdminButton(props: {link: string; text: string | number }) {
  
    return(
      <div className="fixed flex right-0 bottom-0 m-3">
          <Link to='/createUpdate'>
            <div className="px-10 py-2 bg-cyan-600 rounded-full mr-3 hover:bg-cyan-700">
                <button className="text-white textx-xl">Create Update</button>
            </div>
          </Link>
          <Link to='/admin'>
            <div className="px-10 py-2 bg-cyan-600 rounded-full hover:bg-cyan-700">
              <button className="text-white textx-xl">Admin Dashboard</button>
            </div>
          </Link>
      </div>
    )
}

export default AdminButton