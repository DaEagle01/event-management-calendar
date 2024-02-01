import styles from "../../styles/AllEvents.module.css";
import useCalendarState from '../../hooks/useCalendarState';

const AllEvents = () => {
    const { myEvents, setShowModal, setSelectedEvent } = useCalendarState()

    const handleEdit = (event) => {
        setShowModal(true);
        setSelectedEvent(event);
    }

    return (
        <div>
            {myEvents.length > 0 ? (
                <div className={styles.responsiveTable}>
                    <table className={styles.eventTable}>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myEvents?.map((event) => (
                                <tr key={event.title}>
                                    <td data-label="Title">{event.title}</td>
                                    <td data-label="Start Date">{new Date(event.start).toLocaleString()}</td>
                                    <td data-label="End Date">{new Date(event.end).toLocaleString()}</td>
                                    <td data-label="Action">
                                        <button className={styles.iconButton} onClick={() => handleEdit(event)} >
                                            &#x2026;
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
                : (
                    <div className={styles.noEventsContainer}>
                        <h1 className={styles.noEventsText}>
                            No events found! <br />
                            Get Started with Your Schedule <br />
                            by adding some events
                        </h1>
                        <div className={styles.noEventsImage}>
                            <img src="https://images.unsplash.com/photo-1570215171424-f74325192b55?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="a guy scheduling in his computer" />
                        </div>
                    </div>
                )}
        </div>
    )
}

export default AllEvents