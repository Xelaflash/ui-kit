import React from 'react';
import './button.scss';

interface ButtonProps {
  label: string;
  primary?: 'primary' | 'ghost' | 'gradient';
  backgroundColor?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  radius?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = 'primary',
  size = 'large',
  backgroundColor,
  color,
  label,
  radius = 'small',
  ...props
}: ButtonProps) => {
  const mode =
    primary === 'primary'
      ? 'storybook-button--primary'
      : primary === 'ghost'
      ? 'storybook-button--ghost'
      : primary === 'gradient'
      ? 'storybook-button--gradient'
      : 'storybook-button--primary';

  return (
    <button
      type="button"
      className={[
        'storybook-button',
        `storybook-button--${size}`,
        `storybook-button-radius--${radius}`,
        mode,
      ].join(' ')}
      {...props}
    >
      <span> {label}</span>
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
          color: ${color};
          border-radius: ${radius};
        }
      `}</style>
    </button>
  );
};
