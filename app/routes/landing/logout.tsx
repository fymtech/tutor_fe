import { useEffect } from "react";
import { useNavigate } from "react-router";
import { logout, roleToUserType } from "~/services/auth.service";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        const userStr = localStorage.getItem("user");
        const token = localStorage.getItem("auth_token");
        
        if (userStr && token) {
          const user = JSON.parse(userStr);
          const userType = roleToUserType(user.role);
          await logout(userType, token);
        }
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        // Clear local storage
        localStorage.removeItem("auth_token");
        localStorage.removeItem("user");
        
        // Redirect to home
        navigate("/");
      }
    };

    performLogout();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-muted-foreground">Logging out...</p>
      </div>
    </div>
  );
}
