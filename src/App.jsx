import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const ticketFetch = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="grow">
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        ></Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
