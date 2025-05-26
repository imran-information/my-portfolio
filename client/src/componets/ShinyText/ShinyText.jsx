import { useRef, useEffect } from 'react';

const ShinyText = ({ text,secondLetter, disabled = false, speed = 5, className = '' }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && !disabled) {
      ref.current.style.setProperty('--shine-duration', `${speed}s`);
    }
  }, [speed, disabled]);

  return (
    <span className={`relative inline-block text-white font-bold ${className}`}>
      {text}
      {!disabled && (
        <span
          ref={ref}
          className="absolute inset-0 bg-clip-text text-transparent animate-shine pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(120deg, rgba(255,255,255,0) 40%, #13bbff 50%, rgba(255,255,255,0) 60%)',
            backgroundSize: '200% 100%',
            backgroundRepeat: 'no-repeat',
            WebkitBackgroundClip: 'text',
            animationDuration: `var(--shine-duration)`,
          }}
        >
          <div className="flex gap-2">
            {text}  <span className="text-primary-color">{secondLetter}</span>
          </div>
        </span>
      )}
    </span>
  );
};

export default ShinyText;
