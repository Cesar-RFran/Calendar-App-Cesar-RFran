import {useCalendarStore,} from "../../hooks/useCalendarStore";
// import { useUiStore } from "../../hooks/useUiStore";

const FabDelete = () => {
  const { deletEvent: startDeleteEvent, hasEventSelected  } = useCalendarStore(); // Invocar el hook correctamente

  const handleDelete = () => {
    startDeleteEvent();
  };

  return (
    <button className="btn btn-danger fab-danger" onClick={handleDelete} style={{display: hasEventSelected ? '' : 'none'}}>
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};

export default FabDelete;
