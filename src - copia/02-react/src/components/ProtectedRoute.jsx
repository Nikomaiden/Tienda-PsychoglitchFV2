import { Navigate } from "react-router-dom";
import {useAuthStore} from '../stores/authStore.jsx';


export function ProtectedRoute({ children }) {
    const isLoggedIn = false;

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    return children;
}