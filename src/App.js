import { Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Phonebook } from "./pages/Phonebook";
import { PrivateRoute } from "./routes/PrivareRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { userCurrentThunk } from "./redux/thunks";
import { Navigation } from "./components/Navigation/Navigation";
// import { LogoutBtn } from "./components/Button/LogoutBtn";
// import { getIsAuth } from "./redux/selectors";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrentThunk());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<PublicRoute component={Home} />} />
            <Route
              path="/phonebook"
              element={<PrivateRoute component={Phonebook} />}
            />
            <Route path="/*" element={<PublicRoute component={Home} />} />
          </Routes>
        </div>
      </main>
      <Toaster />
    </div>
  );
}

export default App;
