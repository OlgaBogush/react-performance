import type { RowComponentProps } from 'react-window';

import type { Country } from '../../types';
import { CountryCard } from '../country-card/country-card';

interface RowData {
  countries: Country[];
  selectedYear: number;
  selectedColumns: string[];
}

export const Row = ({
  index,
  style,
  countries,
  selectedYear,
  selectedColumns,
}: RowComponentProps<RowData>) => {
  const country = countries[index];

  return (
    <div style={style}>
      <CountryCard
        country={country}
        selectedYear={selectedYear}
        selectedColumns={selectedColumns}
      />
    </div>
  );
};
