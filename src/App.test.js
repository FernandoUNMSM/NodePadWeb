import { render, screen } from '@testing-library/react';
import App from './App';

test('Renderizado completo', () => {
  render(<App />);
  // const linkElement = screen.getByText(/NodePad Web/i);
  const linkElement = screen.getByText(/NodePad Web/,{selector: 'h1'})
  expect(linkElement).toBeInTheDocument();
});

export function setupIntersectionObserverMock({
  root = null,
  rootMargin = '',
  thresholds = [],
  disconnect = () => null,
  observe = () => null,
  takeRecords = () => null,
  unobserve = () => null,
} = {}) {
  class MockIntersectionObserver {
    constructor() {
      this.root = root;
      this.rootMargin = rootMargin;
      this.thresholds = thresholds;
      this.disconnect = disconnect;
      this.observe = observe;
      this.takeRecords = takeRecords;
      this.unobserve = unobserve;
    }
  }
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver
  });
}


beforeEach(()=>{
  setupIntersectionObserverMock()
})