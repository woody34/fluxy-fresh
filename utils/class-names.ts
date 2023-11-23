export function classNames(...args: Array<string | null | undefined>): string {
  return args.filter(Boolean).join(" ");
}
