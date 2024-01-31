import styles from "../../styles/AllEvents.module.css";
import useCalendarState from '../../hooks/useCalendarState';

const AllEvents = () => {
    const { myEvents, setMyEvents, showModal, setShowModal, selectedEvent, setSelectedEvent, handleCloseModal } = useCalendarState()
    console.log(myEvents)
    const handleEdit = (event) => {
        setShowModal(true);
        setSelectedEvent(event);
    }

    return (
        <div>
            {myEvents.length > 0 ? (
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
                                <td>{event.title}</td>
                                <td>{new Date(event.start).toLocaleString()}</td>
                                <td>{new Date(event.end).toLocaleString()}</td>
                                <td>
                                    <button className={styles.iconButton} onClick={() => handleEdit(event)} >
                                        &#x2026;
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>)
                : (
                    <div className={styles.dashboardContainer}>
                        <h1 className={styles.welcomeText}>
                            Get Started with Your Schedule!
                        </h1>
                        <div className={styles.welcomeImage}>
                            <img src="https://images.unsplash.com/photo-1570215171424-f74325192b55?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="a guy scheduling in his computer" />
                        </div>
                    </div>
                )}
        </div>
    )
}

export default AllEvents