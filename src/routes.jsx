// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Portfolio from "./pages/Portfolio";
// import Insights from "./pages/Insights";
// import About from "./pages/About";
// import Legal from "./pages/Legal";
// import { AuthProvider } from "@/context/AuthContext";

// export default function AppRoutes() {
//   return (
//     <Router>
//       <Routes>
//       <Route path="/" element={<Home />} />
//         <Route path="/auth" element={<AuthPage />} />
//         <Route 
//           path="/portfolio" 
//           element={user ? <Portfolio /> : <Navigate to="/auth" />} 
//         />
//         {/* Catch-all route to redirect invalid paths to Home */}
//         <Route path="*" element={<Navigate to="/" />} />
//         <Route path="/legal" element={<Legal />} />
//       </Routes>
//     </Router>
//   );
// }
