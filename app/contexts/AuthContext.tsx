import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { SessionUser, UserRole } from "~/types/auth.types";

interface AuthContextType {
  user: SessionUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: (user: SessionUser | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ 
  children, 
  initialUser 
}: { 
  children: ReactNode; 
  initialUser?: SessionUser | null;
}) {
  const [user, setUser] = useState<SessionUser | null>(initialUser ?? null);
  const [isLoading, setIsLoading] = useState(!initialUser);

  useEffect(() => {
    // If we have an initial user from server, we're done loading
    if (initialUser !== undefined) {
      setIsLoading(false);
    }
  }, [initialUser]);

  const logout = async () => {
    setUser(null);
    // Redirect to logout action
    window.location.href = "/logout";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        setUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Hook to check for specific role
export function useRequireRole(...roles: UserRole[]) {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated || !user) {
    return { hasAccess: false, user: null };
  }
  
  const hasAccess = roles.includes(user.role);
  return { hasAccess, user };
}
