import Select from 'antd/es/select';
import React, { FC } from 'react';
import { SortName } from '@constants/sort';

export type VehicleSortProps = {
  onChange: (value: string) => void;
};

export const VehicleSort: FC<VehicleSortProps> = ({ onChange }) => {
  return (
    <Select
      defaultValue=""
      style={{ width: 200 }}
      onChange={onChange}
      options={[
        { value: SortName.PRICE_TO_HIGHT, label: 'Price (Low to Hight)' },
        { value: SortName.PRICE_TO_LOW, label: 'Price (Hight to Low)' },
        { value: SortName.YEAR_NEWEST, label: 'Year (Newest)' },
        { value: SortName.YEAR_OLDEST, label: 'Year (Oldest)' },
      ]}
    />
  );
};
