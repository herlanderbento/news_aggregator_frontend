import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { Router } from "./Router";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
