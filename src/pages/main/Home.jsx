import { useCookies } from "react-cookie"

function Home(props) {
    const [cookie, setCookie] = useCookies(['user'])

    return (
      <div>
        <h1>
            Hello {cookie.username}
        </h1>
      </div>
    );
}; 
export default Home;