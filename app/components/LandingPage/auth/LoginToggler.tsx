import { useState } from "react";
import { cn } from "~/lib/utils";

interface LoginTogglerProps {
  userType: "student" | "tutor";
  onToggle: (type: "student" | "tutor") => void;
}

export function LoginToggler({ userType, onToggle }: LoginTogglerProps) {
  return (
    <div className="flex bg-muted p-1 rounded-lg w-full max-w-xs mx-auto mb-6">
      <button
        onClick={() => onToggle("student")}
        className={cn(
          "flex-1 py-1.5 text-sm font-medium rounded-md transition-all",
          userType === "student"
            ? "bg-white text-primary shadow-sm"
            : "text-muted-foreground hover:text-primary"
        )}
      >
        Student
      </button>
      <button
        onClick={() => onToggle("tutor")}
        className={cn(
          "flex-1 py-1.5 text-sm font-medium rounded-md transition-all",
          userType === "tutor"
            ? "bg-white text-primary shadow-sm"
            : "text-muted-foreground hover:text-primary"
        )}
      >
        Tutor
      </button>
    </div>
  );
}
