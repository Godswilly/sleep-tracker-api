import {
	Table,
	Column,
	Model,
	DataType,
	CreatedAt,
	UpdatedAt,
	DeletedAt,
	BelongsTo,
	ForeignKey,
} from 'sequelize-typescript';
import User from './user.model';

interface ISleepAttributes {
	id: string;
	startTime: Date;
	endTime: Date;
	date: Date;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date | null;
}

@Table({ tableName: 'sleeps' })
class Sleep extends Model<ISleepAttributes> implements ISleepAttributes {
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		primaryKey: true,
		allowNull: false,
	})
	id!: string;

	@Column({
		field: 'start_time',
		type: DataType.DATE,
		allowNull: false,
	})
	startTime!: Date;

	@Column({
		field: 'end_time',
		type: DataType.DATE,
		allowNull: false,
	})
	endTime!: Date;

	@Column({
		type: DataType.DATEONLY,
		allowNull: false,
	})
	date!: Date;

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

	@ForeignKey(() => User)
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
	})
	userId!: string;

	@BelongsTo(() => User)
	user!: User;
}

export default Sleep;
