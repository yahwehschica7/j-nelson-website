# Getting Started with Jessica Nelson's Website

This project was created with [Create React App](https://https://create-react-app.dev/).

### `Run the app`

Type yarn start in the terminal. Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `Start server`

Type json-server -p 3001 --watch db.json in a different terminal tab to start the json server.

### `Navigating the app`

This site uses the hooks useEffect and useState. It also uses BrowserRouter as Router from react-router-dom and uses three routes to navigate to various components. NavLink is also imported from react-router-dom. The styling is mostly in-line with some modifications to the original 
index.css file. 

### `Components`
There are six unique components:\
Home: introduces user to author and imports the Links component so that users can find the author on social media. \
NavBar: this component titles the page and uses the NavLink router to route the user to Home, Books, or Writer's Resources.\
BookContainer: this component uses fetch within a useEffect to obtain the author's book information and display it on the page.\
WriterResources: this component uses fetch within a useEffect to display writer resources. It imports AddWritingTips for user interaction with page.\
AddWritingTips: a controlled form that uses state and useEffect within a fetch to allow users to add writing advice to the page.

### `Description`
This website is intended to allow readers to know about and buy books written by Jessica Nelson. They can also join her on social media, if the user so wishes.