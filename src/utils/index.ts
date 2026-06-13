// ─── Utility Functions ────────────────────────────────────────────────────────

/**
 * Formats a number as Indian Rupee currency string.
 * e.g. 1250 → "₹1,250"
 */
export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

/**
 * Calculates the discount percentage between original and sale price.
 * Returns a floored integer.
 */
export function calcDiscount(original: number, sale: number): number {
  if (original <= 0) return 0;
  return Math.floor(((original - sale) / original) * 100);
}

/**
 * Clamps a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Returns the next index in a circular array.
 */
export function nextIndex(current: number, length: number): number {
  return (current + 1) % length;
}

/**
 * Returns the previous index in a circular array.
 */
export function prevIndex(current: number, length: number): number {
  return (current - 1 + length) % length;
}

/**
 * Debounces a function by the given delay in ms.
 */
export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Joins class names, filtering out falsy values.
 * Lightweight alternative to clsx.
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Truncates a string to maxLength and appends "..." if needed.
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trimEnd() + "…";
}
