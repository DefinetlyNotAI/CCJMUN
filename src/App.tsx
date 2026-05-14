import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom"
import {useEffect} from "react"
import {Navbar} from "@/components/Navbar"
import {Footer} from "@/components/Footer"
import {Home} from "@/pages/Home"
import {About} from "@/pages/About"
import {Team} from "./pages/Team"
import {Committees} from "@/pages/Committees"
import {Resources} from "@/pages/Resources"
import {Registration} from "@/pages/Registration"
import {Schedule} from "@/pages/Schedule"
import {Contact} from "@/pages/Contact"
import {FAQs} from "@/pages/FAQs"
import * as React from "react";

function ScrollToTop() {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])
    return null
}

function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <main className="flex-1">{children}</main>
            <Footer/>
        </div>
    )
}

function AppRoutes() {
    return (
        <>
            <ScrollToTop/>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/team" element={<Team/>}/>
                    <Route path="/committees" element={<Committees/>}/>
                    <Route path="/resources" element={<Resources/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/schedule" element={<Schedule/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/faqs" element={<FAQs/>}/>
                </Routes>
            </Layout>
        </>
    )
}

function App() {
    return (
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    )
}

export default App
