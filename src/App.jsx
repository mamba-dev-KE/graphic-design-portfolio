import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import "./index.css";

const App = () => {
	return (
		<div>
			<Header />
			<About />
			<Projects />
			<Contacts />
		</div>
	);
};

export default App;
