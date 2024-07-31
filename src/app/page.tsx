'use client';
import SideBar from '@/components/home/SideBar';

import DynamicSidebar from '@/components/common/DynamicSidebar';
import MainContent from '@/components/home/MainContent';

export default function Home() {
  return <DynamicSidebar sidebar={<SideBar />} main={<MainContent />} />;
}
