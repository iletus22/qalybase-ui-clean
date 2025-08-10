import { Link, Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
        <Link to="/">Home</Link> · <Link to="/about">About</Link>
      </nav>
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<h1>QALYbase UI</h1>} />
          <Route path="/about" element={<p>Another page to prove routing works.</p>} />
        </Routes>
      </main>
    </>
  )
}
