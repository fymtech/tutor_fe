import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { LoginToggler } from "~/components/LandingPage/auth/LoginToggler";
import { LandingNavbar } from "~/components/LandingPage/layout/LandingNavbar";
import { login, getDashboardPath } from "~/services/auth.service";
import type { UserType } from "~/types/auth.types";
import { Shield, Loader2 } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<"student" | "tutor">("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await login(userType as UserType, {
        email,
        password,
        deviceType: 3, // Web
      });

      if (response.success && response.data) {
        // Session will be set by server action in production
        // For now, store in localStorage and redirect
        localStorage.setItem("auth_token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        
        const dashboardPath = getDashboardPath(response.data.user.role);
        navigate(dashboardPath);
      } else {
        setError(response.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("Unable to connect to server. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdminLogin = () => {
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <LandingNavbar />
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white dark:bg-card border border-border shadow-md rounded-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold font-heading text-primary mb-2">
              Welcome Back
            </h1>
            <p className="text-muted-foreground">
              Login to your {userType} account
            </p>
          </div>
          
          <LoginToggler userType={userType} onToggle={setUserType} />

          {error && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium mb-1.5 ml-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50"
                placeholder="name@example.com"
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5 ml-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50"
                placeholder="••••••••"
                required
                disabled={isLoading}
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span>Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-primary hover:underline font-medium"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-primary font-medium hover:underline"
            >
              Sign up
            </Link>
          </div>

          {/* Team Login Button */}
          <div className="mt-6 pt-6 border-t border-border">
            <button
              type="button"
              onClick={handleAdminLogin}
              className="w-full py-2.5 bg-secondary/10 hover:bg-secondary/20 text-secondary font-medium rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Shield className="w-4 h-4" />
              Team Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
