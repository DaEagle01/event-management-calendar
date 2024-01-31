import { LayoutDashboard } from 'lucide-react'
import styles from '../../styles/Sidebar.module.css'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const { sidebarContainer, sidebar, sidebarOptionsActive, sidebarOptions, iconStyle, optionText } = styles;
    return (
        <aside className={sidebarContainer}>
            <nav className={sidebar}>
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? sidebarOptionsActive : sidebarOptions}>
                    <LayoutDashboard className={iconStyle} />
                    <span className={optionText}>Dashboard</span>
                </NavLink>
                <NavLink to="/calendar" className={({ isActive }) => isActive ? sidebarOptionsActive : sidebarOptions}>
                    <LayoutDashboard className={iconStyle} />
                    <span className={optionText}>Calendar</span>
                </NavLink>
                <NavLink to="/all-events" className={({ isActive }) => isActive ? sidebarOptionsActive : sidebarOptions}>
                    <LayoutDashboard className={iconStyle} />
                    <span className={optionText}>All Events</span>
                </NavLink>
            </nav >
        </aside>
    )
}

export default Sidebar;