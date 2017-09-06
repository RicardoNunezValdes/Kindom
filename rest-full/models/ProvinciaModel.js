module.exports = function(sequelize, DataTypes) {
  return sequelize.define('provincias', 
    {
      provincia_nombre:    { type : DataTypes.STRING(64),        allowNull:false },      
    },
    {
      deletedAt:        'destroyTime',
      paranoid:          true,
      freezeTableName:   true,
      tableName:         'provincias',
    }
  );
};