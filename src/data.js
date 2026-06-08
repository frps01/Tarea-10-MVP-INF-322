/* USM Admisión — sample data for the kit */
export const CAREERS = [
  { id: 1, name: 'Ingeniería Civil Informática', faculty: 'Depto. de Informática', area: 'Ingeniería', campus: 'Casa Central', duration: '12 sem.', vacancies: 120, cutoff: 730, accredited: false, featured: false },
  { id: 2, name: 'Ingeniería Civil Industrial', faculty: 'Depto. de Industrias', area: 'Ingeniería', campus: 'San Joaquín', duration: '12 sem.', vacancies: 90, cutoff: 702, accredited: false, featured: false },
  { id: 3, name: 'Ingeniería Civil Electrónica', faculty: 'Depto. de Electrónica', area: 'Ingeniería', campus: 'Casa Central', duration: '12 sem.', vacancies: 75, cutoff: 668, accredited: false, featured: false },
  { id: 4, name: 'Arquitectura', faculty: 'Depto. de Arquitectura', area: 'Arquitectura', campus: 'Casa Central', duration: '12 sem.', vacancies: 60, cutoff: 641, accredited: false, featured: false },
  { id: 5, name: 'Ingeniería Civil Mecánica', faculty: 'Depto. de Mecánica', area: 'Ingeniería', campus: 'San Joaquín', duration: '12 sem.', vacancies: 85, cutoff: 655, accredited: false, featured: false },
  { id: 6, name: 'Ingeniería Comercial', faculty: 'Depto. de Industrias', area: 'Negocios', campus: 'San Joaquín', duration: '10 sem.', vacancies: 110, cutoff: 690, accredited: false, featured: false },
  { id: 7, name: 'Ingeniería Civil Matemática', faculty: 'Depto. de Matemática', area: 'Ciencias', campus: 'Casa Central', duration: '12 sem.', vacancies: 40, cutoff: 712, accredited: false, featured: false },
  { id: 8, name: 'Ingeniería Civil Química', faculty: 'Depto. de Ing. Química', area: 'Ingeniería', campus: 'Casa Central', duration: '12 sem.', vacancies: 55, cutoff: 633, accredited: false, featured: false },
  { id: 9, name: 'Ingeniería en Diseño de Productos', faculty: 'Depto. de Diseño', area: 'Diseño', campus: 'Casa Central', duration: '10 sem.', vacancies: 50, cutoff: 612, accredited: false, featured: false },
];

export const AREAS = ['Todas', 'Ingeniería', 'Ciencias', 'Negocios', 'Arquitectura', 'Diseño'];
export const CAMPUSES = ['Sede Viña del mar', 'Casa Central', 'San Joaquín','Sede Vitacura','Sede concepción'];

export const BECAS = [
  { id: 1, name: 'Beca de Excelencia Académica USM', tone: 'gold', cover: '100% arancel', req: 'Puntaje ponderado ≥ 750', tag: 'Mérito' },
  { id: 2, name: 'Beca Santa María', tone: 'brand', cover: '50–100% arancel', req: 'Situación socioeconómica + rendimiento', tag: 'Socioeconómica' },
  { id: 3, name: 'Gratuidad', tone: 'ok', cover: 'Arancel completo', req: 'Pertenecer al 60% de menores ingresos', tag: 'Estatal' },
  { id: 4, name: 'Beca Hijo de Profesional de la Educación', tone: 'brand', cover: 'Hasta $1.150.000', req: 'Padre/madre docente + puntaje ≥ 500', tag: 'Estatal' },
  { id: 5, name: 'Beca Deportiva', tone: 'gold', cover: '25–75% arancel', req: 'Trayectoria deportiva federada', tag: 'Talento' },
  { id: 6, name: 'Beca Vocación de Profesor', tone: 'ok', cover: 'Arancel + mensualidad', req: 'Pedagogías + puntaje ≥ 595', tag: 'Estatal' },
];

export const USM_DATA = { CAREERS, AREAS, CAMPUSES, BECAS };
