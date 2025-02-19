import { DataTypes, Model, Optional } from 'sequelize';
import  sequelizeInternalDB  from '../../database/postgre/postgresql';
import { UUID } from 'crypto';
import exp from 'constants';
import Status from './StatusModel';
import Platforms from './PlatformModel';

interface PostAttributes {
  id: number;
  title: string;
  brand: string;
  platform_id: number;
  due_date: Date;
  payment: number;
  status_id: number;
  created_at: Date;
  updated_at: Date;
}

interface PostCreationAttributes extends Optional<PostAttributes, "id" | "created_at" | "updated_at"> {}

class Post extends Model<PostAttributes, PostCreationAttributes> implements PostAttributes{
    public id!: number;
    public title!: string;
    public brand!: string;
    public platform_id!: number;
    public due_date!: Date;
    public payment!: number;
    public status_id!: number;
    public created_at!: Date;
    public updated_at!: Date;
    public post_status!: Status;
    public post_platform!: Platforms;
} 
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        due_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        payment: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: Status,
              key: "id",
            },
          },
        platform_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: Platforms,
              key: "id",
            },
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
    },
    {
        sequelize: sequelizeInternalDB.sequelizeInternalDB,
        modelName: 'post',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
)

export default Post;