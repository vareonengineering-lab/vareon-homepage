import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import Home from "@/pages/Home";
import ComingSoon from "@/pages/ComingSoon";

// Add new pages here: create a component and add one <Route>.
const FUTURE_ROUTES = ["/projects", "/careers", "/news", "/client-portal", "/erp-login", "/request-a-quote", "/contact"];

export default function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <Navbar />
      <motion.main key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {FUTURE_ROUTES.map((p) => <Route key={p} path={p} element={<ComingSoon />} />)}
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </motion.main>
      <Footer />
      <BackToTop />
    </>
  );
}
