import { DataTypes, Model, Optional } from 'sequelize';
import  sequelizeInternalDB  from '../../database/postgre/postgresql';

interface PlatformsAttributes {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}

interface PlatformsCreationAttributes extends Optional<PlatformsAttributes, "id" | "created_at" | "updated_at"> {}

class Platforms extends Model<PlatformsAttributes, PlatformsCreationAttributes> implements PlatformsAttributes {
    public id!: number;
    public name!: string;
    public created_at!: Date;
    public updated_at!: Date;
  }

  Platforms.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
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
      modelName: "platforms",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

export default Platforms;