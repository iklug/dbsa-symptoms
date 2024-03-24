const SidebarButton = () => {
  return (
    <div className="flex justify-between wrapper menu items-center flex-wrap">
      <div className="h-6 w-6 bg-red-400"></div>
      <div className="text-center order-1 flex-[100%] md:order-none md:flex-auto">
        <div className="h-6 w-6 bg-blue-400 inline-block"></div>
        <div className="h-6 w-6 bg-blue-400 inline-block ml-1"></div>
        <div className="h-6 w-6 bg-blue-400 inline-block ml-1"></div>
      </div>
      <div className="h-6 w-6 bg-green-400"></div>
    </div>
  );
};

export default SidebarButton;
