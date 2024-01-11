import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Fotter";
import BlogSection from "../components/BlogSection";
import BlogPostWriter from "../components/BlogPostWriter";

export default function Community() {
  return (
    <>
      <NavBar />
      <BlogSection />
      <BlogPostWriter />
      <Footer />
    </>
  );
}
