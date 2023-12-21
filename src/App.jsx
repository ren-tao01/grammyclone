import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import { PageLayout } from "./layouts/PageLayout.jsx/PageLayout";
import { ThreeD } from "./pages/ThreeD/ThreeD";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/3D" element={<ThreeD />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
