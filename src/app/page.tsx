import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen bg-gray-100">
      <p className="text-4xl text-gray-950 motion-delay-2000 motion-preset-slide-right">
        Hello
      </p>
      <Button>Button</Button>
    </div>
  );
}
