import { DateTime } from 'luxon';
import { useCallback } from 'react';
import { Calendar, luxonLocalizer } from 'react-big-calendar'
import useCalendarState from '../../hooks/useCalendarState';
import "../../styles/Calendar.css";

const CustomCalendar = () => {
    const { setShowModal, myEvents, setSelectedEvent, } = useCalendarState();
    const localizer = luxonLocalizer(DateTime)

    const handleSelectSlot = useCallback((event) => {
        setSelectedEvent({ start: event.start, end: event.end })
        setShowModal(true);
    }, [setShowModal, setSelectedEvent])

    const handleSelectEvent = useCallback((event) => {
        setShowModal(true)
        setSelectedEvent(event);
    }, [setShowModal, setSelectedEvent])

    return (
        <div className="calendarContainer">
            <Calendar
                localizer={localizer}
                events={myEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: "90vh" }}
                views={["month", "week", "day"]}
                onSelectSlot={handleSelectSlot}
                onSelectEvent={handleSelectEvent}
                selectable
            />
        </div>
    )
}

export default CustomCalendar
