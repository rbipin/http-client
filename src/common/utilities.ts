
export function isNullOrEmpty(value: string | undefined | null): boolean {
  if (value == null || value.trim() === '') {
    return true;
  }
  return false;
}

export function isArrayNullOrEmpty<T>(value: T[] | null | undefined): boolean {
  if (value == null || value.length === 0) {
    return true;
  }
  const hasNulls = value.every(item => {
    if (item == null) {
      return true;
    }
    if (item instanceof String) {
      if (item.trim() === '') {
        return true;
      }
    }
    return false;
  });
  return hasNulls;
}