import { useCookies } from "react-cookie"
import Dashboard from "./Dashboard";


function Home(props) {
    const [cookie, setCookie] = useCookies(['user'])

    if(cookie.firsttime){ // First Time Login
      return (
        <div>
          <h1>
              Welcome {cookie.name}, thanks for joining Cryptohawks.
          </h1>
          <Dashboard />
        </div>
      );
    }
    
    return (
      <div className="">
        <h1 className="font-sans text-4xl font-semibold ml-3">
            Hello {cookie.name}
        </h1>
        <Dashboard />
      </div>
    );
}; 


export default Home;