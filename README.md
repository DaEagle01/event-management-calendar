# React Interactive Event Manager Dashboard

**Live Link:** [React Interactive Dashboard (event-manager-eosin.vercel.app)](https://event-manager-eosin.vercel.app/dashboard)
This project is a dynamic and responsive dashboard for event management. The dashboard allows the user to create, edit, delete, and view events in different formats. The user can choose from four views: list, day, week, and month. The list view shows all the events in a list format. The day, week, and month views show the events in a calendar layout. The user can click on an event to open a modal form that lets them edit the event details, such as title, description, start and end time, and color. The user can also delete an event from the modal form. The user can add a new event by clicking on a slot in the calendar, which opens a modal form. The dashboard uses local storage to save the events data, so the user can access them even after closing the browser. The dashboard is designed to be user-friendly and adaptable to different screen sizes and devices.

## Project Decisions

The following libraries and frameworks were used for this project:

- React.js: A popular library for building user interfaces with components and hooks.
- Context API: A built-in state management solution in React that allows passing data through the component tree without props.
- CSS Modules: A way of modularizing and scoping CSS styles to specific components.
- Luxon: A modern date and time manipulation library that supports immutable data structures and internationalization.
- React Router: A declarative routing library for React that enables navigation between different pages or components.
- React Big Calendar: A customizable calendar component that supports various views and interactions for events.
- React Testing Library: A library that provides utilities for testing React components in a way that resembles how users would interact with them.
- Jest: A testing framework that works well with React and React Testing Library.

These libraries and frameworks were chosen based on their popularity, documentation, compatibility, and functionality. They provide a solid foundation for developing a high-quality React application that meets the project requirements.

## Installation and Usage

To run this project, you need to have Node.js and npm installed on your machine. Then, follow these steps:

Clone this repository:

```bash
git clone https://github.com/DaEagle01/event-management-calendar.git
```

Go to the project directory

```bash
cd  event-management-calendar
```

Install dependencies

```bash
npm  install
```

Start the development server:

```bash
npm  run  dev
```

- Open your browser and go to `http://localhost:3000` to see the dashboard
- To run the tests, use `npm test`
