module.exports = function(sequelize, DataTypes) {
  return sequelize.define('m_fuente_contacto', 
    {
      descripcion: { type : DataTypes.STRING(100),        allowNull:false },      
    },
    {
      deletedAt:        'destroyTime',
      paranoid:          true,
      freezeTableName:   true,
      tableName:         'm_fuente_contacto',
    }
  );
};