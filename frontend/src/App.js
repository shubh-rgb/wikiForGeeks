import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Define routes and page components dynamically
const pages = [
    { path: "/", name: "Home", component: React.lazy(() => import('./pages/Home/Home')) },
    { path: "/cicd", name: "CI/CD", component: React.lazy(() => import('./pages/DevOps/CICD')) },
    { path: "/kubernetes", name: "Kubernetes", component: React.lazy(() => import('./pages/DevOps/Kubernetes')) },
    { path: "/docker", name: "Docker", component: React.lazy(() => import('./pages/DevOps/Docker')) },
    { path: "/iac", name: "Infrastructure as Code", component: React.lazy(() => import('./pages/DevOps/IaC')) },
    { path: "/monitoring", name: "Monitoring", component: React.lazy(() => import('./pages/DevOps/Monitoring')) },
    { path: "/versioncontrol", name: "Version Control", component: React.lazy(() => import('./pages/DevOps/VersionControl')) },
    { path: "/cloudcomputing", name: "Cloud Computing", component: React.lazy(() => import('./pages/DevOps/CloudComputing')) },
    { path: "/networking", name: "Networking", component: React.lazy(() => import('./pages/DevOps/Networking')) },
    { path: "/security", name: "Security", component: React.lazy(() => import('./pages/DevOps/Security')) },
];

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        {pages.map((page) => (
                            <li key={page.path}>
                                <Link to={page.path}>{page.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        {pages.map((page) => (
                            <Route
                                key={page.path}
                                path={page.path}
                                element={<page.component />}
                            />
                        ))}
                    </Routes>
                </React.Suspense>
            </div>
        </Router>
    );
}

export default App;
