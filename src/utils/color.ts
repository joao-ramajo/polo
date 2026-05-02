export function hexToRgb(hex: string) {
  const normalized = hex.replace("#", "");

  if (normalized.length !== 6) {
    return null;
  }

  const value = Number.parseInt(normalized, 16);

  if (Number.isNaN(value)) {
    return null;
  }

  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
}

export function hexToRgba(hex: string, alpha: number) {
  const rgb = hexToRgb(hex);

  if (!rgb) {
    return `rgba(0, 0, 0, ${alpha})`;
  }

  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
}
