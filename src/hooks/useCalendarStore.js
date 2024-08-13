import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeletEvent, onSetActivEvent, onUpdateEvent } from "../store";

export const useCalendarStore = () => {

  const dispatch = useDispatch()

    const {events, activeEvent} = useSelector(state => state.calendar);

    const SetActivEvent = (calendarEvent) => {
      dispatch(onSetActivEvent(calendarEvent))
    }

    const startSavingEvent = async (calendarEvent) => {
      //TODO LLEGAR AL BACK

      //Bien
      if(calendarEvent._id){
        //Actualizando
        dispatch(onUpdateEvent({...calendarEvent}))
      } else {
        // Creando
        dispatch(onAddNewEvent({...calendarEvent, _id: new Date().getTime()}))
      }
    }
    
    const startDeleteEvent = () => {
      //LLEGAR AL BACKEND
      dispatch(onDeletEvent())
    };

  return {
    //Propiedades
    events, 
    activeEvent,
    hasEventSelected: !!activeEvent,

    //Metodos
    deletEvent: startDeleteEvent,
    SetActivEvent,
    startSavingEvent,

  }
}

export default useCalendarStore
