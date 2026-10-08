import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { AcademyApp } from './AcademyApp';

createRoot(document.getElementById('root')).render(
  <StrictMode><AcademyApp /></StrictMode>,
);
