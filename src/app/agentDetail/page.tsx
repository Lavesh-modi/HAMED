'use client';
import SideBarAgent from '@/components/agentDetail/sideBar';
import React from 'react';
import DynamicSidebar from '@/components/common/DynamicSidebar';
import MainAgent from '@/components/agentDetail/mainContent';

function AgentDetail() {
  const handleFavoriteClick = () => {};
  return (
    <DynamicSidebar
      sidebar={
        <SideBarAgent
          name="John Doe"
          image="/agent.png"
          tags={['Tag 1', 'Tag 2', 'Tag 3']}
          category="Category"
          subcategory="SubCategory"
          rating={4.5}
          reviews={1000}
          price={49.99}
          oldPrice={80.0}
          onFavoriteClick={handleFavoriteClick}
        />
      }
      main={<MainAgent />}
    />
  );
}

export default AgentDetail;
