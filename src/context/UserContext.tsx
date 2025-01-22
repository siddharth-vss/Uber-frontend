import { createContext, useState } from "react"


export const UserDataContext = createContext<any>(null);
import { ReactNode } from "react";

interface Context {
    children: ReactNode
}
const UserContext: React.FC<Context> = ({ children }) => {

    const [ user, setUser ] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    })

    return (
        <UserDataContext.Provider value={{
            user,
            setUser,
        }}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserContext