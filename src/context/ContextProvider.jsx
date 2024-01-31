import { createContext } from 'react';
import useEventData from '../hooks//useEventData';

export const CalendarContext = createContext();
const CalendarContextProvider = ({ children }) => {
    const AllContext = useEventData();
    return (
        <div>
            <CalendarContext.Provider value={AllContext}>{children}</CalendarContext.Provider>
        </div>
    );
};

export default CalendarContextProvider;