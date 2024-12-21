interface OpeningHours {
  [day: string]: {
    isOpen: boolean;
    intervals: { start: string; end: string }[];
  };
}

interface DaysOfWeekPT {
  [key: string]: string;
}

/**
 * Formats the opening hours for the current day in Portuguese.
 *
 * @param openingHours - Object containing business hours for each day of the week
 * @returns A formatted string containing today's day name and opening hours in Portuguese.
 * Returns 'Sem informação de horário.' if no hours are available for today,
 * '[Day]: Fechado' if the business is closed today,
 * or '[Day]: HH:MM às HH:MM' (or multiple intervals separated by commas) if open
 *
 * @example
 * // If today is Wednesday and the business is open from 9:00 to 18:00
 * formatOpeningHours(hours) // Returns "Quarta: 09:00 às 18:00"
 *
 * @example
 * // If today is Sunday and the business is closed
 * formatOpeningHours(hours) // Returns "Domingo: Fechado"
 */
export function formatOpeningHours(openingHours: OpeningHours) {
  const daysOfWeek = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];

  const daysOfWeekPT: DaysOfWeekPT = {
    sunday: 'Domingo',
    monday: 'Segunda',
    tuesday: 'Terça',
    wednesday: 'Quarta',
    thursday: 'Quinta',
    friday: 'Sexta',
    saturday: 'Sábado',
  };

  const todayIndex = new Date().getDay();
  const todayKey = daysOfWeek[todayIndex];
  const todayLabel = daysOfWeekPT[todayKey];
  const todayHours = openingHours[todayKey];

  if (!todayHours) return 'Sem informação de horário.';

  if (!todayHours.isOpen) {
    return `${todayLabel}: Fechado`;
  }

  const formattedIntervals = todayHours.intervals
    .map((interval) => `${interval.start} às ${interval.end}`)
    .join(', ');

  return `${todayLabel}: ${formattedIntervals}`;
}

/**
 * Creates a URL-friendly alias from a given string.
 *
 * @param name - The string to convert into an alias
 * @returns A lowercase string with accents removed, special characters stripped,
 *          spaces replaced with hyphens, and multiple hyphens consolidated
 *
 * @example
 * ```ts
 * createAlias("Hello World!") // returns "hello-world"
 * createAlias("Café études") // returns "cafe-etudes"
 * ```
 */
export function createAlias(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}
