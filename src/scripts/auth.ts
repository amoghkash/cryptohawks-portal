import { Cookies } from "react-cookie";

export const logout = () => {
    const cookies = new Cookies()
    cookies.remove('username', {path:'/'});
    cookies.remove('name', {path:'/'});
    cookies.remove('admin', {path:'/'});
    cookies.remove('edit_taskID', {path:'/'})
    cookies.remove('token', {path:'/'})
    window.location.reload()
}