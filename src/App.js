import { Routes, Route } from "react-router-dom";
import AuthProvider from "./contexts/auth";
import News from "./pages/news/news"

const App = () => {
  return(
    <AuthProvider>
      <Routes>
        <Route path="/" element={<News />} /> 
      </Routes>
    </AuthProvider>
  );
};

export default App;
