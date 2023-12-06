import { Model, Table, Column, DataType, HasMany } from "sequelize-typescript";
import { Systems } from "./systems";
import { UsersSites } from "./usersSites";

@Table({ tableName: 'sites', timestamps: false })
export class Sites extends Model<Sites> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
  })
  id!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  name!: string;

  @HasMany(() => Systems)
  systems?: Systems[];

  @HasMany(() => UsersSites)
  usersSites?: UsersSites[];
}
