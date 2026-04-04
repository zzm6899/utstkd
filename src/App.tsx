import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContentProvider } from './context/ContentContext';
import { Navbar } from './components/Navbar';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Training } from './pages/Training';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';
import './App.css';

function App() {
  return (
    <Router>
      <ContentProvider>
        <div className="flex flex-col min-h-screen bg-slate-50">
          {/* Check if on admin page */}
          <Routes>
            <Route
              path="/admin"
              element={<Admin />}
            />
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <AnnouncementBar />
                  <main className="flex-1">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/training" element={<Training />} />
                      <Route path="/contact" element={<Contact />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </ContentProvider>
    </Router>
  );
}

export default App;
