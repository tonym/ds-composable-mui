import jss, { JssOptions } from 'jss';

export function createInsertionPoint(userInsertionPoint: string = 'JSS insertion point'): void {
  const options: Partial<JssOptions> = {
    insertionPoint: document.getElementById(userInsertionPoint) || userInsertionPoint
  };
  jss.setup(options);
}
