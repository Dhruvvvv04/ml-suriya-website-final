import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CourseDetail from './CourseDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
}
