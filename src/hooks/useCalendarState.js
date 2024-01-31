import { useContext } from "react";
import { CalendarContext } from "../context/ContextProvider";

const useCalendarState = () => {
    return useContext(CalendarContext);
};

export default useCalendarState;
