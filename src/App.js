import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import {Routes, Route, Link} from "react-router-dom";
import MustDo from "./pages/MustDo/MustDo";
import FreeTime from "./pages/FreeTime/FreeTime";
import Menu from "./components/Menu/Menu";
import Summary from "./pages/Summary/Summary";


function App() {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <Menu/>
            <Routes>
                <Route path="mustDo" element={<MustDo items={["Homework", "English lesson", "Physical activity", "Room cleaning", "A walk with the dog"]}/>}/>
                <Route path="about" element={<FreeTime/>}/>
                <Route path="summary" element={<Summary/>}/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
