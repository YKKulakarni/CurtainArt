// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import ResizeObserver from 'resize-observer-polyfill';

beforeEach(() => {
    // src/setupTests.js
    global.IntersectionObserver = jest.fn(() => ({
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
    }));
});

// test('renders learn react link', () => {
//     render(<App />);
//     const linkElement = screen.getByText(/rating/i);
//     expect(linkElement).toBeInTheDocument();
// });


global.ResizeObserver = ResizeObserver;
