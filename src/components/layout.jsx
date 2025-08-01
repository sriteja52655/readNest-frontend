import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      {/* Sidebar Component */}
      <AppSidebar />
      
      {/* Main Content */}
      <main className="flex flex-col w-full">
        {/* Sidebar Toggle Button */}
        <SidebarTrigger>
          
        </SidebarTrigger>

        {children}
      </main>
    </SidebarProvider>
  );
}
