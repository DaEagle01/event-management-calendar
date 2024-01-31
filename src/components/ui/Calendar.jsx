import { DateTime } from 'luxon';
import { useCallback, useState } from 'react';
import { Calendar, luxonLocalizer } from 'react-big-calendar'
import Modal from './Modal';
import { X } from 'lucide-react';
import CreateEventForm from './CreateEventForm';
import useCalendarState from '../../hooks/useCalendarState';
import UpdateEventForm from './UpdateEventForm';

const CustomCalendar = () => {
    const { setShowModal, myEvents, setMyEvents, setSelectedEvent, } = useCalendarState();
    const localizer = luxonLocalizer(DateTime)

    const handleSelectSlot = useCallback((event) => {
        console.log(event)
        setSelectedEvent({ start: event.start, end: event.end })
        setShowModal(true);
    }, [setMyEvents])

    const handleSelectEvent = useCallback((event) => {
        setShowModal(true)
        setSelectedEvent(event);
    }, [])

    return (
        <div>
            <Calendar
                localizer={localizer}
                events={myEvents}
                step={4}
                startAccessor="start"
                endAccessor="end"
                style={{ height: "95vh" }}
                views={["month", "week", "day"]}
                onSelectSlot={handleSelectSlot}
                onSelectEvent={handleSelectEvent}
                selectable
            />
        </div>
    )
}

export default CustomCalendar
