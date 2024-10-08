import { VoiceCloning } from "@/components/dashboard/voice-cloning";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import Link from "next/link";

const VoiceClonePage: React.FC = () => {
  return (
    <div className="min-h-screen p-4">
      <div className="flex justify-between items-center p-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <Link href="/dashboard/voice-cloning">Voice Cloning</Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <ThemeToggle />
      </div>
      <VoiceCloning />
    </div>
  );
};

export default VoiceClonePage;
