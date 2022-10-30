import Banner from './components/Banner';
import Search from './components/Search';
import DataGrid from './components/DataGrid';
import SpacexContextProvider from './contexts/SpacexContext';
import './App.css';

function App() {
  return (
    <section>
      <Banner />
      <SpacexContextProvider>
        <Search />
        <DataGrid />
      </SpacexContextProvider>
    </section>
  );
}

export default App;
