import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/home/profile">Profile</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

function About() {return <div>About</div>}
function NotFound() {return <div>Not Found</div>}
export default App;