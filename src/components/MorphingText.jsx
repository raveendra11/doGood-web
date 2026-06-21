import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

/**
 * MorphingText
 *
 * Renders an animated text transition from `from` to `to` using a CSS
 * crossfade + slide technique. The `from` text fades/slides out while the
 * `to` text fades/slides in, creating the illusion that the word is being
 * rewritten (e.g. "DoGood" → "Doing Good").
 *
 * By default the morph fires when the element scrolls into view (uses
 * IntersectionObserver), so the animation only plays when the user actually
 * reaches the section. Set `triggerOnView={false}` to fire on mount instead.
 *
 * Props:
 *  - from:            string shown initially
 *  - to:              string shown after the animation completes
 *  - delay:           ms after the trigger before the morph starts (default 600)
 *  - duration:        ms the morph animation takes (default 700)
 *  - triggerOnView:   if true (default), fire when the element enters the
 *                     viewport; if false, fire on mount
 *  - threshold:       IntersectionObserver threshold (default 0.35)
 *  - rootMargin:      IntersectionObserver rootMargin (default '0px 0px -10% 0px')
 *  - once:            if true (default), disconnect after first reveal so
 *                     the animation only plays once
 *  - sx:              MUI sx passed to the wrapper
 *  - as:              element to render (default 'span')
 */
const MorphingText = ({
  from,
  to,
  delay = 600,
  duration = 700,
  triggerOnView = true,
  threshold = 0.35,
  rootMargin = '0px 0px -10% 0px',
  once = true,
  sx,
  as: Component = 'span',
  ...rest
}) => {
  const wrapperRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(!triggerOnView);

  // Observe the wrapper and flip the flag the first time it becomes visible.
  useEffect(() => {
    if (!triggerOnView) {
      setShouldAnimate(true);
      return undefined;
    }

    const node = wrapperRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      // Fallback: just animate if IO isn't available.
      setShouldAnimate(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAnimate(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setShouldAnimate(false);
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [triggerOnView, threshold, rootMargin, once]);

  const keyframes = `
    @keyframes morphOut {
      0%   { opacity: 1; transform: translateY(0);     filter: blur(0px); }
      100% { opacity: 0; transform: translateY(-12px); filter: blur(6px); }
    }
    @keyframes morphIn {
      0%   { opacity: 0; transform: translateY(14px); filter: blur(6px); }
      100% { opacity: 1; transform: translateY(0);    filter: blur(0px); }
    }
  `;

  const wrapperSx = {
    position: 'relative',
    display: 'inline-block',
    ...sx,
  };

  // When the animation isn't armed yet, render the `from` text in its
  // natural resting state (no animation styles applied).
  const fromSx = shouldAnimate
    ? {
        display: 'inline-block',
        animation: `morphOut ${duration}ms ease-in ${delay}ms forwards`,
      }
    : { display: 'inline-block' };

  const toSx = shouldAnimate
    ? {
        display: 'inline-block',
        opacity: 0,
        animation: `morphIn ${duration}ms ease-out ${delay + duration}ms forwards`,
      }
    : { display: 'none' };

  return (
    <Box ref={wrapperRef} component={Component} sx={wrapperSx} {...rest}>
      <style>{keyframes}</style>
      <Box component="span" sx={fromSx} aria-hidden={!shouldAnimate}>
        {from}
      </Box>
      <Box component="span" sx={toSx} aria-hidden="true">
        {to}
      </Box>
    </Box>
  );
};

export default MorphingText;
