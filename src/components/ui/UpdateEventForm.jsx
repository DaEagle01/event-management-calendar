import useCalendarState from '../../hooks/useCalendarState';
import styles from '../../styles/EventForm.module.css';

const UpdateEventForm = () => {
    const { myEvents, setMyEvents, selectedEvent, handleCloseModal } = useCalendarState();

    const handleUpdate = (e) => {
        e.preventDefault();
        const { title, description, startDate, endDate } = e.target.elements;
        const eventData = {
            eventId: selectedEvent?.eventId,
            title: title.value,
            description: description.value,
            start: new Date(startDate.value),
            end: new Date(endDate.value),
        }
        const newArray = myEvents.map(item =>
            item.eventId === selectedEvent.eventId ? eventData : item
        );
        setMyEvents(newArray);
        localStorage.setItem("events", JSON.stringify(newArray))
        handleCloseModal();
    };

    const handleDelete = (e) => {
        e.preventDefault();
        const removeEvent = myEvents.filter(item => item.eventId !== selectedEvent.eventId);
        setMyEvents(removeEvent);
        localStorage.setItem("events", JSON.stringify(removeEvent))
        handleCloseModal();
    }

    const selectedEventData = {
        title: selectedEvent?.title,
        description: selectedEvent?.description,
        start: selectedEvent?.start ? new Date(selectedEvent?.start).toISOString()?.split('T')[0] : null,
        end: selectedEvent?.end ? new Date(selectedEvent?.end).toISOString()?.split('T')[0] : null,
    }

    return (
        <form onSubmit={handleUpdate} className={styles.form}>
            <label>
                Title:
                <input type="text" name="title" required defaultValue={selectedEventData?.title} />
            </label>
            <label>
                Description:
                <textarea name="description" defaultValue={selectedEventData?.description} />
            </label>
            <label>
                Start Date:
                <input type="date" name="startDate" required defaultValue={selectedEventData?.start} />
            </label>
            <label>
                End Date:
                <input type="date" name="endDate" required defaultValue={selectedEventData?.end} />
            </label>
            <div className={styles.updateButtons}>
                <button>Update</button>
                <button className={styles.deleteBtn} onClick={handleDelete}>Delete</button>
            </div>
        </form>
    );
};

export default UpdateEventForm;
