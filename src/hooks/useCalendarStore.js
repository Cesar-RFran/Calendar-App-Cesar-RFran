import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeletEvent, onLoadEvents, onSetActivEvent, onUpdateEvent } from "../store";
import calendarApi from "../api/calendarApi";
import { convertEventsToDate } from "../helpers/convertEventsToDate";
import Swal from "sweetalert2";

export const useCalendarStore = () => {

  const dispatch = useDispatch()

    const {events, activeEvent} = useSelector(state => state.calendar);
    const {user} = useSelector(state => state.auth);


    const SetActivEvent = (calendarEvent) => {
      dispatch(onSetActivEvent(calendarEvent))
    }

    const startSavingEvent = async (calendarEvent) => {

        try {
          if(calendarEvent.id){
            //Actualizando
            await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
            dispatch(onUpdateEvent({...calendarEvent, user}))
            return;
          }  
    
            // Creando
           const {data} = await calendarApi.post('/events', calendarEvent);
           dispatch(onAddNewEvent({...calendarEvent, id: data.evento.id, user}))

        } catch (error) {
          console.log(error);
          Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }

      
      
    }
    
    const startDeleteEvent = async () => {
      //LLEGAR AL BACKEND
      try {
        await calendarApi.delete(`/events/${activeEvent.id}`);
        dispatch(onDeletEvent())
      } catch (error) {
        console.log(error);
        Swal.fire('Error al eliminar', error.response.data.msg, 'error');
      }

    };

      const startLoadingEvents = async () => {

        try {

          const {data} = await calendarApi.get('/events');
          const events = convertEventsToDate(data.eventos)
          dispatch(onLoadEvents(events))
          console.log(events)

        } catch (error) {
          console.log('Error cargando eventos')
          console.log(error)
        }

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
    startLoadingEvents,

  }
}

export default useCalendarStore
