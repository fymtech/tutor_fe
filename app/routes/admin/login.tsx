import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { LandingNavbar } from "~/components/LandingPage/layout/LandingNavbar";
import { login, getDashboardPath } from "~/services/auth.service";
import { Shield, Loader2, ArrowLeft } from "lucide-react";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await login("admin", {
        email,
        password,
        deviceType: 3, // Web
      });

      if (response.success && response.data) {
        localStorage.setItem("auth_token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/admin");
      } else {
        setError(response.message || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError("Unable to connect to server. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <LandingNavbar />
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white dark:bg-card border border-border shadow-md rounded-2xl p-8">
          {/* Back to regular login */}
          <Link 
            to="/login" 
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Login
          </Link>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-secondary" />
            </div>
            <h1 className="text-3xl font-bold font-heading text-primary mb-2">
              Team Login
            </h1>
            <p className="text-muted-foreground">
              Access the admin dashboard
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium mb-1.5 ml-1">
                Admin Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50"
                placeholder="admin@tutorhub.com"
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
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 bg-secondary text-secondary-foreground font-bold rounded-lg hover:bg-secondary/90 transition-all shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Signing In...
                </>
              ) : (
                <>
                  <Shield className="w-4 h-4" />
                  Access Dashboard
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-border text-center text-xs text-muted-foreground">
            This area is restricted to authorized personnel only.
          </div>
        </div>
      </div>
    </div>
  );
}
