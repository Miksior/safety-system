import { Model, Table, Column, DataType} from "sequelize-typescript";

@Table({ tableName: 'users', timestamps: false })
export class Users extends Model<Users> {
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
  username!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  password_hash!: string;
}
