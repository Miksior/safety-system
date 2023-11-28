import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey, HasMany, BelongsTo, PrimaryKey } from "sequelize-typescript";
import { Alarms } from "./alarms";
import { Sites } from "./sites";

@Table({ tableName: "systems", timestamps: false })
export class Systems extends Model<Systems> {
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

  @ForeignKey(() => Sites)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  site_id!: string;

  @BelongsTo(() => Sites)
  site!: Sites;
}
