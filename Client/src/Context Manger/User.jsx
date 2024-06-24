import UserContext from "../Context/UserContext"
import { useState } from "react"

const UserManger = ({ children }) => {
    const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserManger