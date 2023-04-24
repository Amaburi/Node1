module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('users',{
        email:{
            type: Sequelize.STRING,
            allowNull: false
        },
        name:{
            type: Sequelize.STRING(1234),
        },
        Gender: {
            type: Sequelize.STRING,
        },
        Age: {
            type: Sequelize.INTEGER,
        },
        PhoneNumber: {
            type : Sequelize.INTEGER,
        },
        Password:{
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
    return user;
}