import { Link } from "react-router-dom"

function AdminButton(props: {link: string; text: string | number }) {
  
    return(
      <div className="fixed right-0 bottom-0 m-3">
          <Link to={props.link}>
            <div className="px-10 py-2 bg-cyan-600 rounded-full">
              <button className="text-white textx-xl">{props.text}</button>
            </div>
          </Link>
      </div>
    )
}

export default AdminButton