import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CourseDetail from './CourseDetail';

export default function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    // log to console for now
    console.error('ErrorBoundary caught:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <main style={{minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '2rem'}}>
          <div style={{maxWidth: 720, textAlign: 'center'}}>
            <h1 style={{margin:0}}>Something went wrong</h1>
            <p style={{color:'#5a3e8a'}}>An unexpected error occurred. Check the console for details.</p>
            <pre style={{background:'#fff',padding:'1rem',borderRadius:8,overflow:'auto'}}>{String(this.state.error)}</pre>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}
