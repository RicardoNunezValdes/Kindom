module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rrhh', 
    {
      nombre:           { type : DataTypes.TEXT,        allowNull:false                 },
      run:              { type : DataTypes.STRING(20),  allowNull:false                 },
      email:            { type : DataTypes.STRING(200), allowNull:false                 },
      telefono:         { type : DataTypes.STRING(50),  allowNull:false                 },
      direccion:        { type : DataTypes.TEXT,        allowNull:false                 },
      nro_cuenta:       { type : DataTypes.TEXT,        allowNull:false                 },
    },
    {
      deletedAt:        'destroyTime',
      paranoid:          true,
      freezeTableName:   true,
      tableName:         'rrhh',
    }
  );
};