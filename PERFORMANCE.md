# Performance Optimization Report

## Baseline Measurements

### Interaction A: Sort countries

- **Commit duration**: <0.1 ms
- **Render duration**: 540.4 ms
- **Screenshot**: ![Sort countries](./performance-starter/screenshots/baseline/sort_countries.png)

### Interaction B: Search countries

- **Commit duration**: <0.1 ms
- **Render duration**: 240.7 ms
- **Screenshot**: ![Search countries](./performance-starter/screenshots/baseline/search_countries.png)

### Interaction C: Change year

- **Commit duration**: <0.1 ms
- **Render duration**: 527.3 ms
- **Screenshot**: ![Change year](./performance-starter/screenshots/baseline/change_year.png)

### Interaction D: Toggle column

- **Commit duration**: <0.1 ms
- **Render duration**: 506.6 ms
- **Screenshot**: ![Toggle column](./performance-starter/screenshots/baseline/toggle_column.png)

## Optimized Measurements

### Interaction A: Sort countries

- **Commit duration**: 1.8 ms
- **Render duration**: 39.8 ms
- **Screenshot**: ![Sort countries](./performance-starter/screenshots/optimized/sort_countries-1.png)

### Interaction B: Search countries

- **Commit duration**: 2.3 ms
- **Render duration**: 40 ms
- **Screenshot**: ![Search countries](./performance-starter/screenshots/optimized/search_countries-1.png)

### Interaction C: Change year

- **Commit duration**: 0.9 ms
- **Render duration**: 53.6 ms
- **Screenshot**: ![ Change year](./performance-starter/screenshots/optimized/change_year-1.png)

### Interaction D: Toggle column

- **Commit duration**: <0.1 ms
- **Render duration**: 8.4 ms
- **Screenshot**: ![Toggle column](./performance-starter/screenshots/optimized/toggle_column-1.png)

## Summary of Improvements

| Interaction      | Baseline (ms) | Optimized (ms) | Improvement |
| ---------------- | ------------- | -------------- | ----------- |
| Sort countries   | 540.4         | 39.8           | 92.64%      |
| Search countries | 240.7         | 40             | 83.38%      |
| Change year      | 527.3         | 53.6           | 89.84%      |
| Toggle column    | 506.6         | 8.4            | 98.34%      |
| **Average**      | **453.75**    | **35.45**      | **92.19%**  |
