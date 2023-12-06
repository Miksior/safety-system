import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Systems } from "./systems";

@Table({ tableName: 'alarms', timestamps: false })
export class Alarms extends Model<Alarms> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
  })
  id!: string;

  @ForeignKey(() => Systems)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  system_id!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_active!: boolean;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  created_at!: Date;

  @BelongsTo(() => Systems)
  system!: Systems;
}
