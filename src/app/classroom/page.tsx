"use client";
import React, { useState, useEffect } from 'react';
import {
  Home as HomeIcon,
  Calendar as CalendarIcon,
  GraduationCap as GraduationCapIcon,
  ClipboardList as ClipboardListIcon,
  Download as DownloadIcon,
  Settings as SettingsIcon,
  Plus as PlusIcon,
  Grid3X3 as GridIcon,
  AlignJustify,
  MoreVertical as MoreVerticalIcon,
  Folder as FolderIcon,
  Users as UsersIcon,
  Bell as BellIcon,
  Mail as MailIcon,
  UserCircle as UserCircleIcon,
  ChevronDown as ChevronDownIcon,
} from 'lucide-react';
import Gemini from '../main/components/ai';
import Terminal from '../main/components/terminal';
import Title from '../main/components/title';

// Define the shape of a class card
interface ClassCard {
  id: string;
  name: string;
  section: string;
  teacher: string;
  bgColor: string;
  teacherAvatarUrl?: string; // URL for the teacher's small avatar, if it exists
  studentAvatarUrl?: string; // URL for the student's main avatar, if it exists
  cardContent: {
    line1?: string;
    line2?: string;
    line3?: string;
    line4?: string;
    line5?: string;
  };
}

// Sample data for the class cards, now including avatars and more detailed content
const dummyClasses: ClassCard[] = [
  {
    id: '1',
    name: 'AP Spanish Language ...',
    section: '01',
    teacher: 'Victoria Hayes (DH)',
    bgColor: 'https://www.gstatic.com/classroom/themes/img_learnlanguage.jpg',
    teacherAvatarUrl: 'https://i.pinimg.com/1200x/a3/e5/2b/a3e52bf536eef4d9a85bdc0df555c8b3.jpg',
    studentAvatarUrl: 'https://placehold.co/100x100/4299E1/ffffff?text=C',
    cardContent: {
    },
  },
  {
    id: '2',
    name: 'AP English Literature ...',
    section: '02',
    teacher: 'Michael Carter (DH)',
    bgColor: 'https://gstatic.com/classroom/themes/Math.jpg',
    teacherAvatarUrl: 'https://i.pinimg.com/736x/34/a3/9a/34a39a17e41ea563574f3bfcd79b83ac.jpg',
    studentAvatarUrl: 'https://placehold.co/100x100/E53E3E/ffffff?text=E',
    cardContent: {
      line1: 'Due Thursday',
      line2: 'Great Gatsby Fishbowl',
    },
  },
  {
    id: '3',
    name: 'AP United States Histo...',
    section: '03',
    teacher: 'Daniel Brooks (DH)',
    bgColor: 'https://gstatic.com/classroom/themes/Physics.jpg',
    teacherAvatarUrl: 'https://i.pinimg.com/736x/93/84/c4/9384c48f68b75163e832b2481d0c9b76.jpg',
    studentAvatarUrl: 'https://placehold.co/100x100/A0AEC0/ffffff?text=W',
    cardContent: {

    },
  },
  {
    id: '4',
    name: 'AP Computer Science',
    section: '04',
    teacher: 'Laura Simmons (DH)',
    bgColor: 'https://gstatic.com/classroom/themes/WorldHistory.jpg',
    teacherAvatarUrl: 'https://i.pinimg.com/736x/cc/14/d7/cc14d7f65aaa12164510b7a212b259ff.jpg',
    studentAvatarUrl: '',
    cardContent: {

    },
  },
  {
    id: '5',
    name: 'Physics',
    section: '05',
    teacher: 'Anna Foster (DH)',
    bgColor: 'https://www.gstatic.com/classroom/themes/Chemistry.jpg',
    teacherAvatarUrl: 'https://i.pinimg.com/1200x/72/30/86/723086242f4e3bdd42479bcca94005a8.jpg',
    studentAvatarUrl: '',
    cardContent: {
      line1: 'Due Tuesday',
      line2: '8.8 Electricity and Magnetism Worksheet',
    },
  },
  {
    id: '6',
    name: 'Calculus',
    section: '06',
    teacher: 'James Turner (DH)',
    bgColor: 'https://www.gstatic.com/classroom/themes/English.jpg',
    teacherAvatarUrl: 'https://i.pinimg.com/736x/f1/02/69/f1026971ae318292fc0b9f16fe4c6c68.jpg',
    studentAvatarUrl: '',
    cardContent: {
      line1: 'Due Wednesday',
      line2: '11.2 Practice Worksheet #1-12',
      line3: 'Due Thursday',
      line4: '11.3 Practice Worksheet #1-17',
    },
  },
];

// Sidebar navigation component
const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const navItems = [
    { name: 'Home', icon: HomeIcon, color: 'text-[#1a73e8]' },
    { name: 'Calendar', icon: CalendarIcon, color: 'text-[#5f6368]' },
    { name: 'Enrolled', icon: GraduationCapIcon, color: 'text-[#5f6368]' },
    { name: 'To-do', icon: ClipboardListIcon, color: 'text-[#5f6368]' },
  ];

  const classItems = [
    { name: 'AP Spanish Language - Hayes', section: '01', icon: 'A', bgColor: '#1a73e8' },
    { name: 'AP English Literature & Compo ...', section: '02', icon: 'A', bgColor: '#f4511e' },
    { name: 'AP United States History', section: '03', icon: 'A', bgColor: '#9e9e9e' },
    { name: 'AP Computer Science', section: '04', icon: 'A', bgColor: '#33b860' },
    { name: 'Physics', section: '05', icon: 'P', bgColor: '#00838f' },
    { name: 'Calculus', section: '06', icon: 'A', bgColor: '#4d4d4d' },
  ];

  const bottomItems = [
    { name: 'Archived classes', icon: DownloadIcon, color: 'text-[#5f6368]' },
    { name: 'Settings', icon: SettingsIcon, color: 'text-[#5f6368]' },
  ];

  return (
    <div className="hidden lg:flex flex-col w-[18.75rem] ">
      <div className="flex-grow py-2 w-[18.75rem]">
        {/* Main navigation */}
        {navItems.map((item) => (
          <div
            key={item.name}
            onClick={() => setActiveLink(item.name)}
            className={`flex items-center p-3 rounded-full cursor-pointer transition-colors duration-200 mx-2 my-1 ${activeLink === item.name ? 'bg-[#E8F0FE] text-[#1a73e8]' : 'hover:bg-gray-100 text-[#5f6368]'
              }`}
          >
            <item.icon className={`h-6 w-6 mr-4 ${activeLink === item.name ? 'text-[#1a73e8]' : 'text-[#5f6368]'}`} />
            <div className="font-medium text-[#202124]">{item.name}</div>
            {item.name === 'Enrolled' && (
              <ChevronDownIcon size={20} className="ml-auto text-gray-500" />
            )}
          </div>
        ))}

        {/* Enrolled classes list */}
        {classItems.map((item) => (
          <div
            key={item.name}
            className="flex items-start p-1 px-6 rounded-full cursor-pointer transition-colors duration-200 hover:bg-gray-100"
          >
            <div className={`h-6 w-6 rounded-full flex items-center justify-center text-white font-semibold text-xs mr-4`} style={{ backgroundColor: item.bgColor }}>
              {item.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-[0.875rem] text-[#202124]">{item.name}</span>
              <span className="text-xs text-[#5f6368]">{item.section}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom navigation */}
      <div className="pl-4 pr-4 pb-4 space-y-2">
        {bottomItems.map((item) => (
          <div
            key={item.name}
            className="flex items-center p-3 rounded-full cursor-pointer transition-colors duration-200 hover:bg-gray-100 text-[#5f6368]"
          >
            <item.icon className="h-6 w-6 mr-4" />
            <span className="font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main content component with class cards
const MainContent = () => {
  return (
    <div className="flex-grow p-6 overflow-y-auto bg-white rounded-4xl">
      <div className="grid gap-5"         style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(0, 300px))",
        }}>
        {dummyClasses.map((cls) => (
          <div
            key={cls.id}
            className=" rounded-xl shadow-md overflow-hidden aspect-square h-[300px] flex flex-col justify-between flex-grow"
          >
            {/* Card Header */}
            <div className={`relative h-[100px] p-4 text-white rounded-t-lg bg-cover`} style={{ backgroundImage: `url(${cls.bgColor})` }}>
              <h2 className="text-2xl">{cls.name}</h2>
              <p className="text-sm ">{cls.section}</p>
              <p className="text-xs mt-1">{cls.teacher}</p>

              {/* Teacher Avatar */}
              {cls.teacherAvatarUrl && (
                <div className="absolute bottom-[-35px] right-5">
                  <img
                    src={cls.teacherAvatarUrl}
                    alt="Teacher Avatar"
                    className="h-18 w-18 rounded-full"
                  />
                </div>
              )}
              {/* Student Avatar / Initial */}
              {cls.studentAvatarUrl && (
                <div className="absolute bottom-4 right-4">
                  <img
                    src={cls.studentAvatarUrl}
                    alt="Student Initial"
                    className="h-10 w-10 rounded-full border-2 border-white"
                  />
                </div>
              )}
            </div>

            {/* Card Body */}
            <div className="p-4 text-xs text-[#202124] flex flex-col justify-start h-[139px]">
              {cls.cardContent.line1 && (
                <div className="flex items-center">
                  <p className="truncate">{cls.cardContent.line1}</p>
                </div>
              )}
              {cls.cardContent.line2 && (
                <div className="flex items-center">
                  <p className="truncate">{cls.cardContent.line2}</p>
                </div>
              )}
              <br />
              {cls.cardContent.line3 && (
                <div className="flex items-center">
                  <p className="truncate">{cls.cardContent.line3}</p>
                </div>
              )}
              {cls.cardContent.line4 && (
                <div className="flex items-center">
                  <p className="truncate">{cls.cardContent.line4}</p>
                </div>
              )}
            </div>

            {/* Card Footer */}
            <div className="flex justify-end p-4 border-t border-gray-200 space-x-7">
              <UsersIcon size={24} className="text-[#5f6368] hover:text-[#202124] cursor-pointer" />
              <FolderIcon size={24} className="text-[#5f6368] hover:text-[#202124] cursor-pointer" />
              <MoreVerticalIcon size={24} className="text-[#5f6368] hover:text-[#202124] cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      {/* Hidden classes link */}
      <div className="mt-8 text-center sm:text-left">
        <a href="#" className="text-[#0b57d0!important] text-sm font-medium hover:underline">
          Show hidden classes (4)
        </a>
      </div>
    </div>
  );
};

// Main App component
export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [toggled, setToggled] = useState<boolean>(false);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key.toLowerCase() === "p") {
      setToggled(prev => !prev)
    }
  }

  const handleVisibilityChange = () => {
    setToggled(false);
  };

  useEffect(() => {
    window.addEventListener("keypress", (e) => { handleKeyPress(e) })
    window.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
      window.removeEventListener('visibilitychange', handleVisibilityChange);
    }
  }, [])

  return (
    <div>
      <div style={{ display: toggled ? "flex" : "none" }}>
        <Terminal>
          <Title page="Gemini 2.5 Flash Wrapper"></Title>
        <Gemini></Gemini>
        </Terminal>
      </div>
      <div className="flex flex-col h-screen font-sans bg-[#f8fafd]" style={{ display: toggled ? "none" : "flex" }}>
        {/* Top Navbar */}
        <nav className="flex items-center justify-between px-6 py-3 ">
          <div className="flex items-center">
            <button
              className="lg:hidden p-2 rounded-full hover:bg-gray-200 transition-colors"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <AlignJustify size={24} />
            </button>
            <div className="flex items-center ml-2 text-[#202124]">
              <AlignJustify></AlignJustify>
              <img src="logo.png" alt="" width={25} className=" mr-4 ml-8" />
              {/* <GridIcon size={24} className="text-[#5f6368] mr-2" /> */}
              <h1 className="text-xl font-medium">Classroom</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
              <PlusIcon size={24} className="text-[#5f6368]" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
              <GridIcon size={24} className="text-[#5f6368]" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
              <MailIcon size={24} className="text-[#5f6368]" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
              <BellIcon size={24} className="text-[#5f6368]" />
            </button>
            <UserCircleIcon size={32} className="text-[#5f6368]" />
          </div>
        </nav>

        <div className="flex flex-grow overflow-hidden">
          {/* Sidebar (mobile overlay) */}
          <div
            className={`fixed inset-y-0 left-0 z-50  transition-transform transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
              } lg:relative lg:translate-x-0 lg:flex-shrink-0`}
          >
            <div className="flex flex-col h-full">
              <div className="flex-grow overflow-y-auto">
                <Sidebar />
              </div>
            </div>
          </div>

          {/* Main content area */}
          <MainContent />
        </div>
      </div>
    </div>
  );
}
