export function say(name: string) {
  return 'hi : ' + name;
}

export function action(type: string, last: string) {
  return type + ' to you ' + last;
}

export function isNull(val: any): boolean {
  return val === null;
}
