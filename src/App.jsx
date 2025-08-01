import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthPage } from "./pages/Auth.jsx";
import { BooksPage } from "./pages/Books.jsx";
import { WishlistPage } from "./pages/Wishlist.jsx";
import Auth from "./lib/Auth.jsx";
import { useEffect } from "react";
import { getCurrentUser } from "./lib/axios.js";
import { useDispatch } from "react-redux";
import { login as authLogin } from "./store/authSlice.js";
import Layout from "./components/Layout"; // Import the Layout component
import { CreateBookPage } from "./pages/createBook.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await getCurrentUser();
      dispatch(authLogin(response.data));
    };

    fetchDetails();
  }, []);

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/auth" replace />} />
      <Route path="/auth" element={<Auth authentication={false}><AuthPage /></Auth>} />
      <Route path="/books" element={<Layout><Auth><BooksPage /></Auth></Layout>} />
      <Route path="/wishlist" element={<Layout><Auth><WishlistPage /></Auth></Layout>} />
      <Route path="/books/create" element={<Layout><Auth><CreateBookPage /></Auth></Layout>} />
    </Routes>
    </Router>
  );
}

export default App;
