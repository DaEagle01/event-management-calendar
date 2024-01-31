
import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/Dashboard/Dashboard';
import ViewEvents from '../pages/Dashboard/ViewEvents';
import AllEvents from '../pages/Dashboard/AllEvents';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Navigate to="dashboard" />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: 'calendar',
                element: <ViewEvents />
            },
            {
                path: 'all-events',
                element: <AllEvents />
            }
        ],
    }
]);

export default router;
