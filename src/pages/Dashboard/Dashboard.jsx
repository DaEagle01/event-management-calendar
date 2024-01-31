import styles from "../../styles/Dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={styles.dashboardContainer}>
            <h1 className={styles.welcomeText}>Welcome to the Event Management dashboard.</h1>
            <div className={styles.welcomeImage}>
                <img src="https://images.unsplash.com/photo-1506485338023-6ce5f36692df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="a calendar" />
            </div>
        </div>
    )
}

export default Dashboard