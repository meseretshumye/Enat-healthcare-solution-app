import AppRoutes from "./routes";
import { Slide, ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer autoClose={3000} theme="colored" transition={Slide} />
      <AppRoutes />
    </>
  );
}

export default App;
