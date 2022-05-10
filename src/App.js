import Navbar from "./components/Navbar/Navbar";
import AuthPage from "./pages/AuthPage";
import CartContextProvider from "./contexts/CartContextProvider"
import AuthContextProvider from "./contexts/AuthContextProvider";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
            <Navbar />
            <AuthPage />
      </AuthContextProvider>
    </div>
  );
}

export default App;
