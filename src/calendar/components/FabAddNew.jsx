import { addHours } from "date-fns";
import {useCalendarStore,} from "../../hooks/useCalendarStore";
import { useUiStore } from "../../hooks/useUiStore";

const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const { SetActivEvent } = useCalendarStore(); // Invocar el hook correctamente

  const handleClickNew = () => {
    SetActivEvent({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: '#fafafa',
      user: {
        _id: '123',
        name: 'Cesar',
      },
    });
    openDateModal();
  };

  return (
    <button className="btn btn-primary fab" onClick={handleClickNew}>
      <i className="fas fa-plus"></i>
    </button>
  );
};

export default FabAddNew;
