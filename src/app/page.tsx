'use client';
import SideBar from '@/components/Home/SideBar';

import DynamicSidebar from '@/components/common/DynamicSidebar';
import MainContent from '@/components/Home/MainContent';

export default function Home() {
  return <DynamicSidebar sidebar={<SideBar />} main={<MainContent />} />;
}
