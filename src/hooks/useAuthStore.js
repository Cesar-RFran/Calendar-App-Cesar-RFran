import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";


const useAuthStore = () => {

 const {status, error, errorMessage} = useSelector(state => state.auth )
 const dispatch = useDispatch()

 const startLogin = async ({email, password}) => {
    console.log({email, password})

    try {
        
        const resp = await calendarApi.post('/auth', {email, password})
        console.log({resp})

        
    } catch (error) {
        console.log(error)
    }

 };

return {
    // Propiedades
    errorMessage,
    status, 
    error, 
    
    // Metodos
    startLogin,
}



};




export default useAuthStore
