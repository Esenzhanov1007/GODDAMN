import Navbar from "./components/Navbar/Navbar";
import AuthPage from "./pages/AuthPage";
import CartContextProvider from "./contexts/CartContextProvider"
import AuthContextProvider from "./contexts/AuthContextProvider";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
            <Navbar />
            <AuthPage />
            <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
