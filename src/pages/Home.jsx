import { useCookies } from "react-cookie"
import { Link } from 'react-router-dom'


function Home(props) {
    const [cookie, setCookie] = useCookies(['user'])

    if(cookie.firsttime){ // First Time Login
      return (
        <div>
          <h1>
              Welcome {cookie.name}, thanks for joining Cryptohawks.
          </h1>
        </div>
      );
    }
    
    return (
      <div className="bg-slate-400">
        <h1>
            Hello {cookie.name}
        </h1>
        <AdminButton />
      </div>
    );
}; 


function AdminButton(props) {
  const [cookie, setCookie] = useCookies(['user'])
  if(cookie.admin == "true"){
    return(
      <div>
        <Link to="/admin" className="text-blue-500">
          <button>Admin Dashboard</button>
        </Link>
      </div>
    )
  } else {
    <div>

    </div>
  }
}
export default Home;