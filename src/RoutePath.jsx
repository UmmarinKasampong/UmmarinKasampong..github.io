
import { HashRouter, Routes, Route } from "react-router-dom";
import App  from './App.jsx'
import Project_page from './Page/Project_Page/project_page.jsx';
import Work_page from './Page/Work_Page/work_page.jsx';


export default function RoutePath() {
  return (
    <HashRouter>
      
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/Project-Page" element={<Project_page/>} />
          <Route path="/Work-Page" element={<Work_page/>} />
        </Routes>
      
    </HashRouter>
  );
}


