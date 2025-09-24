import { Button } from "./ui/button";
import { Home as HomeIcon } from "lucide-react";

export function HomeButton() {
  return (
    <div className="absolute top-3 left-3 z-50">
      <Button
        variant="default"
        size="sm"
        onClick={() => { window.location.href = "../index.html"; }}
        className="inline-flex flex-col items-center justify-center gap-0.5 rounded-full px-3 py-2 shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <HomeIcon className="h-4 w-4" />
        <span className="text-[10px] leading-none">HOME</span>
      </Button>
    </div>
  );
}


