import useCalendarState from '../../hooks/useCalendarState';
import styles from '../../styles/EventForm.module.css';
import { generateEventId } from "../../libs/generateEventId";

const CreateEventForm = () => {
    const { myEvents, setMyEvents, selectedEvent, handleCloseModal } = useCalendarState();

    const handleSubmit = (event) => {
        event.preventDefault();
        const { title, description, startDate, endDate } = event.target.elements;
        const eventData = {
            eventId: generateEventId(),
            title: title.value,
            description: description.value,
            start: new Date(startDate.value),
            end: new Date(endDate.value),
        }
        setMyEvents([...myEvents, eventData]);
        const parseEvents = JSON.parse(localStorage.getItem("events"));
        let newEvents = parseEvents ? [...parseEvents, eventData] : [eventData];
        localStorage.setItem("events", JSON.stringify(newEvents))
        handleCloseModal();
    };

    const selectedEventData = {
        title: selectedEvent?.title,
        description: selectedEvent?.description,
        start: selectedEvent?.start ? new Date(selectedEvent?.start).toISOString()?.split('T')[0] : null,
        end: selectedEvent?.end ? new Date(selectedEvent?.end).toISOString()?.split('T')[0] : null,
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label>
                Title:
                <input type="text" name="title" required />
            </label>
            <label>
                Description:
                <textarea name="description" />
            </label>
            <label>
                Start Date:
                <input type="date" name="startDate" required defaultValue={selectedEventData?.start} />
            </label>
            <label>
                End Date:
                <input type="date" name="endDate" required defaultValue={selectedEventData?.end} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreateEventForm;
