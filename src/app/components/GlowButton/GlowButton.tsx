import { useEffect } from 'react';
import { gsap } from 'gsap';
import chroma from 'chroma-js';
import './GlowButton.scss';

export default function GlowButton() {
  useEffect(() => {
    document.querySelectorAll('.glow-button').forEach((button) => {
      const gradientElem = document.createElement('div');
      gradientElem.classList.add('gradient');

      button.appendChild(gradientElem);

      button.addEventListener('pointermove', (e) => {
        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(button, {
          '--pointer-x': `${x}px`,
          '--pointer-y': `${y}px`,
          duration: 0.6,
        });

        gsap.to(button, {
          '--button-glow': chroma
            .mix(
              getComputedStyle(button)
                .getPropertyValue('--button-glow-start')
                .trim(),
              getComputedStyle(button)
                .getPropertyValue('--button-glow-end')
                .trim(),
              x / rect.width
            )
            .hex(),
          duration: 0.2,
        });
      });
    });
  }, []);

  return (
    <div className="mb-16 px-14">
      <button className="glow-button">
        <span>Button</span>
      </button>
    </div>
  );
}
