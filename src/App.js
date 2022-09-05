import './App.css';
import Portfolio from './components/Portfolio';
import data from './ImageData';

function App() {
    return (
        <Portfolio props={data}/>
    );
}


export default App;
