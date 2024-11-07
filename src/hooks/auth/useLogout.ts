import Cookies from "js-cookie";

export const useLogout = () => {
    const logout = () =>{
        Cookies.remove('currentUser');
        window.dispatchEvent(new Event('userLogout'));
    }

    return {logout}
}