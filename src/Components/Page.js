import react, {useContext ,useState } from 'react';
import List from "./List"
import  userContext from "./UserContext";
export default function Page()
{
    const userCtx = useContext(userContext);
    // console.log(props,'p')
// const name=userCtx.userName;
// const password=userCtx.usePassword;
return(
<>
helow {userCtx.userName}
<List></List>
</>)
}