import React, {useContext, useState} from 'react'
const UserContext = React.createContext();
export function useUserContext(){
  return useContext(UserContext);
}
export function UserProvider({children}){
  const [User, SetUser] = useState(() => { return { auth: false, token: null,UserData:{}} });
  return (
    <UserContext.Provider value={[User, SetUser]}>
      {children}
    </UserContext.Provider>
  )
}
