import React, { FC } from 'react';
import { VehiclesData } from '@store/vehicles/slice';
import Card from 'antd/es/card/Card';
import styles from './styles.module.scss';

export type VehicleCardProps = {
  vehicles: VehiclesData[];
};

type VehicleFields = { title: string; fieldName: keyof VehiclesData };

export const VehicleCard: FC<VehicleCardProps> = ({ vehicles }) => {
  const vehicleFields: VehicleFields[] = [
    { title: 'Color', fieldName: 'color' },
    { title: 'Model', fieldName: 'model' },
    { title: 'Price', fieldName: 'price' },
    { title: 'Year', fieldName: 'year' },
  ];

  return (
    <div className={styles.wrapper}>
      {vehicles?.map((vehicle) => (
        <Card key={vehicle.id} title={vehicle.name} className={styles.card}>
          <div className={styles.inner}>
            {vehicleFields.map((vehicleField) => (
              <Card type="inner" title={vehicleField.title}>
                {vehicle[vehicleField.fieldName]}
              </Card>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};
