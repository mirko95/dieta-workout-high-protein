/**
 * iOS-style micro haptic feedback using navigator.vibrate
 */

export function triggerHaptic(type: 'light' | 'medium' | 'success' | 'warning' = 'light'): void {
  if (typeof window === 'undefined' || !('vibrate' in navigator)) return;

  try {
    switch (type) {
      case 'light':
        navigator.vibrate(8);
        break;
      case 'medium':
        navigator.vibrate(15);
        break;
      case 'success':
        navigator.vibrate([10, 40, 15]);
        break;
      case 'warning':
        navigator.vibrate([20, 60, 20]);
        break;
    }
  } catch {
    // Ignore unsupported
  }
}
