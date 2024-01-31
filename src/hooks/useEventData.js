import { useState } from "react";

const useEventData = () => {
    const parseEvents = JSON.parse(localStorage.getItem("events"))
    const validEvents = parseEvents?.map(item => ({
        eventId: item?.eventId,
        title: item?.title,
        description: item?.description,
        start: new Date(item?.start),
        end: new Date(item?.end)
    }));
    const [myEvents, setMyEvents] = useState(validEvents || []);
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState();

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedEvent({});
    }

    return {
        myEvents,
        setMyEvents,
        showModal,
        setShowModal,
        selectedEvent,
        setSelectedEvent,
        handleCloseModal
    }
}

export default useEventData;