# SQL Query Web Application

This is a simple SQL Query Web Application built using React that allows users to enter SQL queries and view the results in a table format. The application also provides a list of predefined queries for quick access.

## Overview

The SQL Query Web Application consists of two main components:
1. **App.js**: The main entry point of the application. It serves as the layout and navigation component using React Router. It renders the Home component and the Editor component.
2. **Editor.js**: This component is responsible for handling the SQL queries, running them, and displaying the results. It includes a textarea for users to enter their SQL queries, buttons to run and clear the queries, and a table to display the results.

## Features

- Accepts SQL queries from users and displays the results in a table format.
- Provides a list of predefined queries for quick access.
- Allows users to run a SQL query and view the results instantly.
- Offers the ability to clear the textarea and the query result table.
- Responsive layout for a better user experience on various devices.

## How to Use

1. **Home Page**: Upon launching the application, users are presented with the Home page, which displays the title and a "Run SQL" button. Clicking the "Run SQL" button will navigate users to the SQL Query Editor.

2. **SQL Query Editor**: In the Editor page, users can enter their SQL queries into the textarea provided. After entering the query, they can click the "Run Query" button to execute the query. The results will be displayed in a table format below the textarea. If the query is not found in the predefined list, an alert will notify the user.

3. **Predefined Queries**: The application comes with two predefined queries:
   - "All Employees": `SELECT * FROM employees`
   - "Name of Employees": `SELECT name, department FROM employees`

4. **Clear Text**: Users can clear the textarea and the query result table by clicking the "Clear Query" button.

5. **History**: On the left side of the Editor page, there is a history section that displays the two predefined queries. Users can click on these queries, and they will be automatically pasted into the textarea. The selected query can then be executed using the "Run Query" button.

## Installation

To run the SQL Query Web Application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory and install the dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Open your web browser and visit `http://localhost:3000` to access the application.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Router: For handling navigation within the application.
- CSS: For styling and layout.

## Load Time

The total load time of the application is 2 milliseconds. The load timings are as follows:

```
Load timings (ms)
Sat Jul 29 2023 16:53:26 GMT+0530 (India Standard Time)
Event       Start   Duration    End
Redirect    0       0           0
DNS         11      0           11
Connect     11      0           11
Request     64      35          99
Response    99      1           101
DOM         101     485         586
Parse       101     56          157
Execute Scripts     157     46          203
Content loaded      203     0           203
Sub Resources       203     383         586
Load event  586     2           588
Total       588
```

**Optimizations for Decreased Load Time and Improved Performance:**

In app.js:

1. **Code Splitting**: Utilized React.lazy and Suspense to dynamically import components.

2. **Optimized Routing**: Implemented BrowserRouter for cleaner and user-friendly URLs, enhancing the overall routing performance.

In editor.js:

1. Used the useState hook to reducing excessive updates and improving performance while the user is typing.

2. To efficiently update the sqlQuery state with the selected historical query.

## Credits

This project is developed by [Anshuman Shukla](https://www.linkedin.com/in/anshuman-shukla-0a0a591ba/)

This Project is deployed on `vercel` at [Click](https://sql-web.vercel.app/)
---

Thank you for checking out the SQL Query Web Application. If you have any questions or suggestions, please feel free to contact us. Happy coding!
