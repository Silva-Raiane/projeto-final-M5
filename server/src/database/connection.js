import {Sequelize} from "sequelize";

const database = new Sequelize("db_insight_bytes", "db_insight_bytes_user", "kquGYxi4oohKQbsB5qir3o6a0rTUsVCL", {
    host: "postgres://db_insight_bytes_user:kquGYxi4oohKQbsB5qir3o6a0rTUsVCL@dpg-cotvb6icn0vc73e9fps0-a.oregon-postgres.render.com/db_insight_bytes",
    dialect: "postgres",
    logging: false
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