import Aux from './hoc/Aux';
import MainNav from './components/layout/MainNav';
import Layout from './components/layout/Layout';

function App() {
    return (
        <Aux>
            <MainNav />
            <Layout />
        </Aux>
    )
}

export default App;
