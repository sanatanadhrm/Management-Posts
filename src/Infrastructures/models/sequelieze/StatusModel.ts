import { DataTypes, Model, Optional } from "sequelize";
import  sequelizeInternalDB  from '../../database/postgre/postgresql';


interface StatusAttributes {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}

interface StatusCreationAttributes extends Optional<StatusAttributes, "id" | "created_at" | "updated_at"> {}

class Status extends Model<StatusAttributes, StatusCreationAttributes> implements StatusAttributes {
    public id!: number;
    public name!: string;
    public created_at!: Date;
    public updated_at!: Date;
  }

  Status.init(
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
      modelName: "statuses",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

export default Status;