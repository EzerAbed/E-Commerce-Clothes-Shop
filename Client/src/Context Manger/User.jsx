import UserContext from "../Context/UserContext"
import { useState, useEffect } from "react"

const UserManger = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;
    })

    //to prevent the user to disconnect on refresh
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserManger