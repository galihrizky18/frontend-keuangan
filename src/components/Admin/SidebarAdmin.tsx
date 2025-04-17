import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import MenuSidebar from "./Sidebar/MenuSidebar";

const SidebarAdmin = () => {
  return (
    <div className="bg-white">
      <div className="hidden lg:flex lg:flex-col w-full h-full p-5 gap-3">
        {/* Header */}
        <div>Header Logo</div>
        <div className="border border-black">
          <ScrollArea className="h-[50rem] w-full ">
            <MenuSidebar />
          </ScrollArea>
        </div>
      </div>
      {/* SideBar Android */}
      <div className="lg:hidden ">
        <Drawer direction="left">
          <DrawerTrigger>Open</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default SidebarAdmin;
