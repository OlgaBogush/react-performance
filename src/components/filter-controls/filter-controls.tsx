import { memo } from 'react';

import styles from './filter-controls.module.css';

interface FilterControlsProps {
  sortField: 'name' | 'population';
  handleSortFieldChange: (field: 'name' | 'population') => void;
  handleSortOrderToggle: () => void;
  sortOrder: 'asc' | 'desc';
}

export const FilterControls = memo(
  ({ sortField, handleSortFieldChange, handleSortOrderToggle, sortOrder }: FilterControlsProps) => {
    return (
      <div className={styles.sortContainer}>
        <label className={styles.sortLabel}>Sort by:</label>
        <select
          value={sortField}
          onChange={(e) => handleSortFieldChange(e.target.value as 'name' | 'population')}
          className={styles.sortSelect}
        >
          <option value="population">Population</option>
          <option value="name">Name</option>
        </select>

        <button onClick={handleSortOrderToggle} className={styles.sortButton}>
          {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
        </button>
      </div>
    );
  }
);
