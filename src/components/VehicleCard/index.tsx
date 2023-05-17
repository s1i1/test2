import React, { FC, useState } from 'react';
import { VehiclesData } from '@store/vehicles/slice';
import { Card, Input } from 'antd';
import styles from './styles.module.scss';

export type VehicleCardProps = {
  vehicles: VehiclesData[];
  onEdit: (id: number, fieldName: string, content: string | number) => void;
};

type VehicleFields = { title: string; fieldName: keyof VehiclesData };

type EditableFields = { id: number; fieldName: string };

export const VehicleCard: FC<VehicleCardProps> = ({ vehicles, onEdit }) => {
  const vehicleFields: VehicleFields[] = [
    { title: 'Color', fieldName: 'color' },
    { title: 'Model', fieldName: 'model' },
    { title: 'Price', fieldName: 'price' },
    { title: 'Year', fieldName: 'year' },
  ];

  const [isContentEditable, setContentEditable] = useState(false);
  const [editableField, setEditableField] = useState<EditableFields>();
  const [content, setContent] = useState<string | number>('');

  const handleClickInnerField = (
    vehicleContent: string | number,
    id: number,
    fieldName: string,
  ) => {
    setContentEditable(true);
    setEditableField({ id: id, fieldName: fieldName });
    setContent(vehicleContent);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleInputBlur = () => {
    setContentEditable(false);
    if (!editableField) return;

    const { id, fieldName } = editableField;

    onEdit(id, fieldName, content);
  };

  return (
    <div className={styles.wrapper}>
      {vehicles?.map((vehicle) => (
        <Card key={vehicle.id} title={vehicle.name} className={styles.card}>
          <div className={styles.inner}>
            {vehicleFields.map((vehicleField) => {
              const vehicleContent = vehicle[vehicleField.fieldName];
              return (
                <Card
                  key={vehicleField.fieldName}
                  type="inner"
                  title={vehicleField.title}
                  onClick={() =>
                    handleClickInnerField(vehicleContent, vehicle.id, vehicleField.fieldName)
                  }>
                  {isContentEditable &&
                  editableField?.id === vehicle.id &&
                  editableField?.fieldName === vehicleField.fieldName ? (
                    <Input
                      value={content}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      autoFocus
                    />
                  ) : (
                    <span>{vehicleContent}</span>
                  )}
                </Card>
              );
            })}
          </div>
        </Card>
      ))}
    </div>
  );
};
