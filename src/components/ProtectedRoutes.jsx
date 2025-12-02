import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true); // loading state while checking auth
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setIsAuthenticated(true);
      } else {
        // No user is signed in
        setIsAuthenticated(false);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    // You can return a spinner or blank screen while checking
    return <div className="flex justify-center items-center min-h-screen text-white">Checking authentication...</div>;
  }

  if (!isAuthenticated) {
    // Redirect to login if not signed in
    return <Navigate to="/login" replace />;
  }

  // Render the protected page
  return children;
}
