import { Route, Routes } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Dashboard } from './pages/Dashboard';
import { PrivateRoute } from './components/PrivateRoute';

export function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        {/* <PrivateRoute isAuthenticated={authenticated} authenticationPath='/' path="dashboard" element={<Dashboard />} /> */}
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
