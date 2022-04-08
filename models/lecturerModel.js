module.exports = (sequelize, DataTypes) => {

    const Lecturer = sequelize.define("lecturer", {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
       
        profession: {
            type: DataTypes.STRING,
        },
       
    
    
    })

    return Lecturer

}