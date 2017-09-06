module.exports = function(sequelize, DataTypes) {
  return sequelize.define('regiones', 
    {
      region_nombre:    { type : DataTypes.STRING(64),        allowNull:false },      
      region_ordinal:   { type : DataTypes.STRING(4),        allowNull:false },      
    },
    {
      deletedAt:        'destroyTime',
      paranoid:          true,
      freezeTableName:   true,
      tableName:         'regiones',
    }
  );
};