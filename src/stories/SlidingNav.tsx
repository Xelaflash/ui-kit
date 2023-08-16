'use client';

import React, { use, useEffect, useRef, useState } from 'react';
import './slidingNav.scss';

interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  overlayColor?: string;
}

export function SlidingNav({
  backgroundColor = '#222222',
  color = '#ffffff',
  overlayColor = '#e5e7eb4d',
}: ButtonProps) {
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  const tabs = [
    {
      id: 'home',
      name: 'Home',
    },
    {
      id: 'blog',
      name: 'Blog',
    },
    {
      id: 'projects',
      name: 'Projects',
    },
    {
      id: 'about',
      name: 'About',
    },
  ];

  return (
    <div className="wrapper" style={{ backgroundColor: `${backgroundColor}` }}>
      <span
        className="overlay"
        style={{
          left: tabUnderlineLeft,
          width: tabUnderlineWidth,
        }}
      >
        <span
          className="inner-overlay"
          style={{ backgroundColor: `${overlayColor}` }}
        />
      </span>
      {tabs.map((tab, index) => {
        return (
          <button
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className="tab bg-gray-200/30"
            style={
              {
                color: `${color}`,
              } as React.CSSProperties
            }
            onClick={() => setActiveTabIndex(index)}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
}
