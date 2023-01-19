import React,{createContext,useState}from 'react';

export const userContext =createContext();

export default function UserContext(props){

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState();
    const [isLogIn,setIsLogIn]=useState(false);
    

    return(
       <userContext.Provider value={{userName,setUserName,password}}>
      {props.children}
       </userContext.Provider>
    );
}