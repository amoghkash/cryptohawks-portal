import { useCookies } from "react-cookie"

function Home(props) {
    const [cookie, setCookie] = useCookies(['user'])
    if(cookie.firsttime){
      return (
        <div>
          <h1>
              Welcome {cookie.name}, thanks for joining Cryptohawks.
          </h1>
        </div>
      );
    }
    
    return (
      <div>
        <h1>
            Hello {cookie.name}
        </h1>
      </div>
    );
}; 
export default Home;