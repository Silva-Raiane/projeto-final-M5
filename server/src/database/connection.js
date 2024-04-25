import {Sequelize} from "sequelize";

const database = new Sequelize("db_insight_bytes", "root", "root", {
    host: "localhost",
    dialect: "mysql"
});

export async function tryToConnect(){
    try{
        database.sync({force:true});
        await database.authenticate();
        console.log("Connected to the database.");
    }catch(error){
        console.log("Error trying to connect to the database.");
    }
}

export {database};