import "./globals.css";
import Navbar from "../components/Navbar";
import { WorkoutProvider } from "../context/WorkoutContext";
import Toast from "../components/Toast";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WorkoutProvider>
          <Navbar />
          {children}
          <Footer />
          <Toast />
        </WorkoutProvider>
      </body>
    </html>
  );
}