import { memo, useMemo } from 'react';
import { List, useDynamicRowHeight } from 'react-window';

import type { Country } from '../../types';
import { getPopulationForYear, createYearDataMap } from '../../utils/data-transformers';
import { Row } from '../country-row/country-row';

import styles from './country-list.module.css';

type CountryListProps = {
  countries: Country[];
  searchQuery: string;
  selectedColumns: string[];
  selectedRegion: string;
  selectedYear: number;
  sortField: 'name' | 'population';
  sortOrder: 'asc' | 'desc';
  onYearChange: (year: number) => void;
};

export const CountryList = memo(
  ({
    countries,
    searchQuery,
    selectedColumns,
    selectedRegion,
    selectedYear,
    sortField,
    sortOrder,
  }: CountryListProps) => {
    const filteredCountries = useMemo(() => {
      const array = countries.map((c) => ({ ...c, yearDataMap: createYearDataMap(c.data) }));

      return array
        .filter((c) => {
          const matchesSearch = c.id.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesRegion = !selectedRegion || c.data.some((d) => d.region === selectedRegion);
          return matchesSearch && matchesRegion;
        })
        .sort((a, b) => {
          if (sortField === 'name') {
            return sortOrder === 'asc' ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id);
          } else {
            const popA = getPopulationForYear(a.yearDataMap, selectedYear) || 0;
            const popB = getPopulationForYear(b.yearDataMap, selectedYear) || 0;

            return sortOrder === 'asc' ? popA - popB : popB - popA;
          }
        });
    }, [countries, searchQuery, selectedRegion, sortField, sortOrder, selectedYear]);

    const dynamicRowHeight = useDynamicRowHeight({
      defaultRowHeight: 296,
    });

    return (
      <div className={styles.countryList}>
        <List
          rowComponent={Row}
          rowCount={filteredCountries.length}
          rowHeight={dynamicRowHeight}
          rowProps={{
            countries: filteredCountries,
            selectedYear,
            selectedColumns,
          }}
        />
      </div>
    );
  }
);
