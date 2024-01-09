export function fromKebabToCamel(value: string): string {
  return value.replace(/-./g, m => m.toUpperCase()[1]);
}
