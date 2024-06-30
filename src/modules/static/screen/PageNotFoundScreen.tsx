import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const PageNotFoundScreen = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="mb-16 flex flex-col items-center justify-center gap-4">
        <span className="flex flex-col items-center justify-center">
          <span className="text-[24px]">404</span>
          <h1 className="text-[64px] font-bold">Page Not Foud</h1>
        </span>
        <p className="block text-lg">
          Oops! Looks like you followed a bad link. If you think this is a
          problem with us, please tell us.
        </p>
      </div>

      <Button className="flex items-center justify-center gap-2">
        <ChevronLeft className="" /> Go back home
      </Button>
    </div>
  );
};

export default PageNotFoundScreen;
