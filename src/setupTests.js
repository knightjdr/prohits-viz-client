import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

// Mock ObjectURL.
const noOp = () => {};
if (typeof window.URL.createObjectURL === 'undefined') {
  Object.defineProperty(window.URL, 'createObjectURL', { value: noOp, writable: true });
}
if (typeof window.URL.revokeObjectURL === 'undefined') {
  Object.defineProperty(window.URL, 'revokeObjectURL', { value: noOp, writable: true });
}
