import "@testing-library/jest-dom";

// Add TextEncoder and TextDecoder for react-router-dom compatibility
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;