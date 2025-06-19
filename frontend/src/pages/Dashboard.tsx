import { useState } from 'react';
import icon from '../assets/logo.jpg';
import {
  Askicon, MainEvIcon, StarIcon, WidIcon,
  LibIcon, AffirIcon, PracIcon, ProgresIcon, HelpIcon
} from '../components/Icons';

// Sidebar item component
const SideBarComponent = ({
  text,
  Icon,
  isCollapsed,
}: {
  text: string;
  Icon: React.FC;
  isCollapsed: boolean;
}) => {
  return (
    <div className="flex items-center gap-2 text-sm hover:bg-blue-100 p-2 rounded-md cursor-pointer transition-all duration-300">
      <div className="w-6 h-6 flex items-center justify-center">
        <Icon />
      </div>
      {!isCollapsed && <p className="whitespace-nowrap">{text}</p>}
    </div>
  );
};

// Dashboard with collapsible sidebar
export const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="w-full flex">
      {/* Sidebar */}
      <div
        className={`${
          isCollapsed ? 'w-16' : 'w-1/6'
        } h-screen overflow-y-auto overflow-x-hidden border-r border-slate-500 transition-all duration-300 bg-white`}
      >
        {/* Header with toggle */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <img className="h-6" src={icon} alt="icon" />
            {!isCollapsed && <p className="text-sm font-semibold">SuperKalam</p>}
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-xs font-bold px-2 py-1 hover:bg-gray-200 rounded"
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>

        {/* Sidebar items */}
        <SideBarComponent text="Ask SuperKalam" Icon={Askicon} isCollapsed={isCollapsed} />
        <SideBarComponent text="Mains Evaluation" Icon={MainEvIcon} isCollapsed={isCollapsed} />
        <SideBarComponent text="Super Saturday" Icon={StarIcon} isCollapsed={isCollapsed} />
        <SideBarComponent text="My Tests" Icon={WidIcon} isCollapsed={isCollapsed} />
        <SideBarComponent text="My Library" Icon={LibIcon} isCollapsed={isCollapsed} />
        <SideBarComponent text="Current Affairs" Icon={AffirIcon} isCollapsed={isCollapsed} />
        <SideBarComponent text="Practice PYQs" Icon={PracIcon} isCollapsed={isCollapsed} />
        <SideBarComponent text="My Progress" Icon={ProgresIcon} isCollapsed={isCollapsed} />
        <SideBarComponent text="Help & Support" Icon={HelpIcon} isCollapsed={isCollapsed} />
      </div>

      {/* Main content */}
      <div className="w-5/6 h-screen overflow-auto p-4">
        <div className='flex flex-col items-center mt-10'>
          <img className='h-10 w-10' src={icon} alt="" />
          <p>Wlcome, Name </p>
        </div>
      </div>
    </div>
  );
};
