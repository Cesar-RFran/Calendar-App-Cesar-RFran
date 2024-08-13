import { useSelector } from "react-redux"

const useCalendarStore = () => {

    const {events, activeEvent} = useSelector(state => state.calendar);

  return {
    //Propiedades
    events, 
    activeEvent,

    //Metodos

  }
}

export default useCalendarStore
