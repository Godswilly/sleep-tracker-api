import {
	Table,
	Column,
	Model,
	DataType,
	CreatedAt,
	UpdatedAt,
	DeletedAt,
	HasMany,
} from 'sequelize-typescript';
import Sleep from './sleep.model';

interface IUserAttributes {
	id: string;
	username: string;
	email: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date | null;
}

@Table({ tableName: 'users' })
class User extends Model<IUserAttributes> implements IUserAttributes {
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		primaryKey: true,
		allowNull: false,
	})
	id!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	username!: string;

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
		unique: true,
	})
	email!: string;

	@Column({
		type: DataType.STRING(255),
		allowNull: false,
	})
	password!: string;

	@Column({
		field: 'created_at',
		type: DataType.DATE,
		allowNull: false,
	})
	@CreatedAt
	createdAt!: Date;

	@Column({
		field: 'updated_at',
		type: DataType.DATE,
		allowNull: false,
	})
	@UpdatedAt
	updatedAt!: Date;

	@Column({
		field: 'deleted_at',
		type: DataType.DATE,
		allowNull: true,
	})
	@DeletedAt
	deletedAt!: Date | null;

	@HasMany(() => Sleep)
	sleep!: Sleep[];
}
export default User;
