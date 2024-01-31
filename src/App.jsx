
import DashboardLayout from "./components/layout/DashboardLayout";
import CalendarContextProvider from "./context/ContextProvider";
function App() {
  return (
    <CalendarContextProvider>
      <DashboardLayout />
    </CalendarContextProvider>
  )
}

export default App
