import { VehiclesData } from '@store/vehicles/slice';

export enum SortName {
  PRICE_TO_HIGHT = 'PRICE_TO_HIGHT',
  PRICE_TO_LOW = 'PRICE_TO_LOW',
  YEAR_NEWEST = 'YEAR_NEWEST',
  YEAR_OLDEST = 'YEAR_OLDEST',
}

export const AVAILABLE_SORTS: Record<string, (a: VehiclesData, b: VehiclesData) => number> = {
  [SortName.PRICE_TO_HIGHT]: (a, b) => a.price - b.price,
  [SortName.PRICE_TO_LOW]: (a, b) => b.price - a.price,
  [SortName.YEAR_NEWEST]: (a, b) => b.year - a.year,
  [SortName.YEAR_OLDEST]: (a, b) => a.year - b.year,
};
