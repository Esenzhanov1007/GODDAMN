import Navbar from "./components/Navbar/Navbar";
import AuthPage from "./pages/AuthPage";
import CartContextProvider from "./contexts/CartContextProvider"
import AuthContextProvider from "./contexts/AuthContextProvider";
import Footer from "./components/Footer/Footer";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
            <Navbar />
            <MainRoutes />
            <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
