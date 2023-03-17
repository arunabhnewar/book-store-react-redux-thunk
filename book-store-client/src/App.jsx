import "./App.css";
import Layout from "./components/Layout/Layout";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className='App'>
      <Layout>
        <Shop />
      </Layout>
    </div>
  );
}

export default App;
