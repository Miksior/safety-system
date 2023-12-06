import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Users } from "./users";
import { Sites } from "./sites";

@Table({ tableName: 'users_sites', timestamps: false })
export class UsersSites extends Model<UsersSites> {
  @ForeignKey(() => Users)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
  })
  user_id!: string;

  @ForeignKey(() => Sites)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
  })
  site_id!: string;

  @BelongsTo(() => Users)
  user!: Users;

  @BelongsTo(() => Sites, { foreignKey: 'user_id', targetKey: 'id' })
  site!: Sites;
}




