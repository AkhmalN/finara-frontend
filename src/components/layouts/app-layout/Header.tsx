import { useState } from "react";
import finraLogo from "@/assets/Finara-brand.png";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAuth } from "@/context/auth-context";
import { LogOut, UserCog } from "lucide-react";

export default function Header() {
  const { logout } = useAuth();
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const handleLogoutConfirm = () => {
    setLogoutDialogOpen(false);
    logout();
  };

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <img
            src={finraLogo}
            alt="Finara Logo"
            className="h-12 object-contain"
          />
          <nav className="flex items-center space-x-4">
            <Button variant={"outline"}>
              <UserCog /> Profile
            </Button>
            <Button
              className={"bg-red-600 cursor-pointer"}
              onClick={() => setLogoutDialogOpen(true)}
            >
              <LogOut /> Logout
            </Button>
          </nav>
        </div>
      </div>

      <Dialog open={logoutDialogOpen} onOpenChange={setLogoutDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Logout</DialogTitle>
            <DialogDescription>
              Are you sure you want to logout? You will need to login again to
              access your account.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setLogoutDialogOpen(false)}
            >
              No
            </Button>
            <Button className="bg-red-600" onClick={handleLogoutConfirm}>
              Yes, Logout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
}
