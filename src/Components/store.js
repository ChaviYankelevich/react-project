import produce from "immer"
import {createStore} from "redux";

const STORAGE_KEY = 'current_user';
const data$=localStorage.getItem(STORAGE_KEY)
const localUser=data$!="undefined"? JSON.parse(localStorage.getItem(STORAGE_KEY)): {isLogin:false,userName:"",password:""};
const initialState = {
    loginUser:{
        isLogin:localUser.isLogin,
    userName: localUser.userName,
    password: localUser.password,   
    }  ,
    products:
        [
            { "name": "מכונית" ,"img":"../Pictures/2.png","data":"מכונית בשווי 1000000 שקלים כולל דלק לשנה"},
            { "name": "סלון מפנק", "img":"../Pictures/3.png","data":"שיפוץ לסלון שיתן לבית מראה אחר"},
            { "name": "שופינג בארצות הברית","img":"../Pictures/13.png","data":"טיסה זוגית לארצות הברית בתוספת של 1000$ לשופינג"},
            { "name": "נופש זוגי מפנק", "img":"../Pictures/15.png","data": "נופש זוגי באצולת אירופה"},
            { "name": "זיכוי באושר עד", "img":"../Pictures/5.png" ,"data":"זיכוי של 2000 שקלים באושר עד"},
            { "name": "קניות און ליין", "img":"../Pictures/34.png","data":"קניות און ליין בסך של 10000$" },
            { "name": "גאגטים לילדים","img":"../Pictures/722.png","data":"גאגטים שהילדים חולמים עליהם" },
            { "name": "דלק לשנה", "img":"../Pictures/דלק-לשנה.png" ,"data":"דלק בחינם למשך שנה שלמה"},
            { "name": "זיכוי בטרקלין שמש", "img":"../Pictures/טרקלין-שמש.png","data":"זיכוי של 5000 שקלים בטרקלין שמש" },
            { "name": "מעמיסים עגלות", "img":"../Pictures/מעמיסים-עגלות.png","data":"כל מה שתצליח להעמיס יהיה שלך" },
            { "name": "מצלמת קנון", "img":"../Pictures/56.png","data":"מצלמת קנון איכותית בשווי 1000 שקלים" }
        
        ]  ,
        contributions:[
            {
                "Date":"16/03/2021",
                "Contributor":"moshe",
                "Type":"visa",
                "Sum":100
            },
            {
                "Date":"15/03/2021",
                "Contributor":"yaakov",
                "Type":"check",
                "Sum":200
            },
            {
                "Date":"16/05/2022",
                "Contributor":"jon",
                "Type":"visa",
                "Sum":50
            }
        ],
       userDitails: [
            {"userName":"chavi","password":"1234","address":"ezra","email":"chavi95445@gmail.com"}
        ]
}
const reducer = produce((state, action) => { 
    switch(action.type)
    {
        case 'setState':
            {console.log(state,"state")
               
                //  Object.assign( state.loginUser, action.payload);
              state.loginUser=action.payload
    localStorage.setItem(STORAGE_KEY,JSON.stringify(action.payload));}
case 'setProduct':
    // Object.assign(state.products, action.payload);
state.products.push(action.payload)
    
    case 'setContribution':
state.contributions.push(action.payload)

case 'setDetails':
    state.userDitails= action.payload
    }  
    
}, initialState)
export const store = createStore(reducer)
