module.exports = function(sequelize, DataTypes) {
  return sequelize.define('m_producto', 
    {
      sku:              { type : DataTypes.STRING(20),    allowNull:false                 },
      nombre:           { type : DataTypes.TEXT,          allowNull:true,                 },
      descripcion:      { type : DataTypes.TEXT,          allowNull:false                 },
      precio:           { type : DataTypes.DOUBLE,        allowNull:false                 },
      descuento:        { type : DataTypes.DOUBLE,        allowNull:true, defaultValue:0  },
      impuesto:         { type : DataTypes.BOOLEAN,       defaultValue:false              },
      emite_boleta:     { type : DataTypes.BOOLEAN,       defaultValue:false              },
      image:            { type : DataTypes.TEXT,          allowNull:true                  }
    },
    {
      deletedAt:        'destroyTime',
      paranoid:          true,
      freezeTableName:   true,
      tableName:         'm_producto',
    }
  );
};