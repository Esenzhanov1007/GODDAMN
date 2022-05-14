import Navbar from "./components/Navbar/Navbar";
import AuthPage from "./pages/AuthPage";
import CartContextProvider from "./contexts/CartContextProvider"
import AuthContextProvider from "./contexts/AuthContextProvider";
import Footer from "./components/Footer/Footer";
import MainRoutes from "./routes/MainRoutes";
import Navigation from "./components/Navigation/Navigation";
import ProductContextProvider from "./contexts/ProductContextProvider";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <Navbar />
            <Navigation />
            <MainRoutes />

            <Footer />
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
