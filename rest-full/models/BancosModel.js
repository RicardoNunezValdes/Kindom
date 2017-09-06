module.exports = function(sequelize, DataTypes) {
  return sequelize.define('m_bancos', 
    {
      nombre: { type : DataTypes.STRING(50),        allowNull:false },      
      cod:    { type : DataTypes.STRING(10),        allowNull:false },      
    },
    {
      deletedAt:        'destroyTime',
      paranoid:          true,
      freezeTableName:   true,
      tableName:         'm_bancos',
    }
  );
};