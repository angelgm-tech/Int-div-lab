export function processStyles(styles: Record<string, string>) {
  const processedStyles = { ...styles };
  
  // Process transforms
  const transforms = [];
  if (styles.rotate) transforms.push(`rotate(${styles.rotate}deg)`);
  if (styles.scale) transforms.push(`scale(${parseInt(styles.scale) / 100})`);
  if (styles.skewX) transforms.push(`skewX(${styles.skewX}deg)`);
  if (styles.skewY) transforms.push(`skewY(${styles.skewY}deg)`);
  if (transforms.length > 0) {
    processedStyles.transform = transforms.join(' ');
  }

  // Process box shadow
  if ('boxShadowX' in styles || 'boxShadowY' in styles || 'boxShadowBlur' in styles) {
    const x = styles.boxShadowX || '0';
    const y = styles.boxShadowY || '0';
    const blur = styles.boxShadowBlur || '0';
    processedStyles.boxShadow = `${x}px ${y}px ${blur}px rgba(0,255,242,0.3)`;
  }

  // Clean up helper properties
  const helperProps = [
    'rotate', 'scale', 'skewX', 'skewY',
    'boxShadowX', 'boxShadowY', 'boxShadowBlur'
  ];
  helperProps.forEach(prop => delete processedStyles[prop]);

  return processedStyles;
}