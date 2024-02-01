import { Outlet } from 'react-router-dom'
import styles from "../../styles/DashboardLayout.module.css";
import Sidebar from './Sidebar'
import useCalendarState from '../../hooks/useCalendarState';
import Modal from '../ui/Modal';
import UpdateEventForm from '../ui/UpdateEventForm';
import CreateEventForm from '../ui/CreateEventForm';
import { X } from 'lucide-react';

const DashboardLayout = () => {
    const { showModal, selectedEvent, handleCloseModal } = useCalendarState()
    return (
        <div className={styles.dashboardContainer}>
            {showModal && (
                <Modal show={showModal}>
                    <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                        <h2>{showModal && selectedEvent?.title ? "Update" : "Add"}  Event</h2>
                        <X onClick={handleCloseModal} />
                    </div>
                    {showModal && selectedEvent?.title ? <UpdateEventForm /> : <CreateEventForm />}
                </Modal>
            )}
            <Sidebar />
            <div className={styles.dashboardContent}>
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout