import React from 'react';
import gsap from 'gsap';
import './button.scss';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  btnStyle?: 'default' | 'glow';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  document.querySelectorAll('.glow-button').forEach((button) => {
    const gradientElem = document.createElement('div');
    gradientElem.classList.add('gradient');

    button.appendChild(gradientElem);

    button.addEventListener('pointermove', (e) => {
      console.log(e);
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
            getComputedStyle(button).getPropertyValue('--button-glow-start').trim(),
            getComputedStyle(button).getPropertyValue('--button-glow-end').trim(),
            x / rect.width
          )
          .hex(),
        duration: 0.2,
      });
    });
  });

  return (
    <button
      type="button"
      className={
        props.btnStyle === 'glow' ? 'glow-button' : ['storybook-button', `storybook-button--${size}`, mode].join(' ')
      }
      {...props}
    >
      <span> {label}</span>
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
