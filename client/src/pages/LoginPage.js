
export default function LoginPage(){
    return(
        
            <form>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>

                <button>Login</button>
            </form>
    );
}

// import { useContext, useState } from "react";
// import { Navigate } from "react-router-dom";
// import axios from "axios";
// import { UserContext } from "../UserContext";

// export default function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [redirect, setRedirect] = useState(false);
//   const { setUserInfo } = useContext(UserContext);

//   async function login(ev) {
//     ev.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4000/login', {
//         username,
//         password
//       }, {
//         withCredentials: true, // Para incluir cookies na solicitação
//       });

//       if (response.status === 200) {
//         setUserInfo(response.data);
//         setRedirect(true);
//       } else {
//         alert('wrong credentials');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('Error during login');
//     }
//   }

//   if (redirect) {
//     return <Navigate to={'/'} />;
//   }

//   return (
//     <form className="login" onSubmit={login}>
//       <h1>Login</h1>
//       <input
//         type="text"
//         placeholder="username"
//         value={username}
//         onChange={(ev) => setUsername(ev.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="password"
//         value={password}
//         onChange={(ev) => setPassword(ev.target.value)}
//       />
//       <button>Login</button>
//     </form>
//   );
// }