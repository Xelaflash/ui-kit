'use client';

import { gsap } from 'gsap';
import style from './Accordion.module.scss';
import { useRef, useState } from 'react';

interface ItemData {
  backgroundImage: string;
}

export default function Accordion() {
  const [clickedItems, setClickedItems] = useState<boolean[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const expand = (index: number) => {
    setClickedItems((prevClickedItems) => {
      const updatedClickedItems = [...prevClickedItems];
      updatedClickedItems[index] = !updatedClickedItems[index];
      return updatedClickedItems;
    });

    const items = itemRefs.current;
    const item = items[index];

    gsap.to(item, {
      width: clickedItems[index] ? '15vw' : '42vw',
      duration: 2,
      ease: 'elastic(1, .7)',
    });

    items.forEach((it, i) => {
      if (i !== index) {
        gsap.to(it, {
          width: clickedItems[index] ? '15vw' : '8vw',
          duration: 2.5,
          ease: 'elastic(1, .4)',
        });
      }
    });
  };

  const itemsData: ItemData[] = [
    {
      backgroundImage:
        'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      backgroundImage:
        'https://images.unsplash.com/photo-1574879948818-1cfda7aa5b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    },
    {
      backgroundImage:
        'https://images.unsplash.com/photo-1558383409-ab7ef8db3e01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1193&q=80',
    },
    {
      backgroundImage:
        'https://images.unsplash.com/photo-1547059470-3b0c7cd958a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    },
    {
      backgroundImage:
        'https://images.unsplash.com/photo-1558383738-8e44bbf6b093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
  ];

  return (
    <div className={style.group}>
      {itemsData.map((itemData, index) => (
        <div
          className={`${style.item} ${
            clickedItems[index] ? style.clicked : ''
          }`}
          style={{ backgroundImage: `url(${itemData.backgroundImage})` }}
          key={index}
          ref={(element) => (itemRefs.current[index] = element)}
          onClick={() => expand(index)}
        ></div>
      ))}
    </div>
  );
}
