export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export { theme, LumiThemeProvider } from './theme/theme';

export { Card } from './components/card';
