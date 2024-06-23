import { app } from "./src/app.js";
import { config  } from "dotenv";
config();



app.listen(4000, (err) => {
    if(err){
        console.log(err);
    };
    
    console.log(`Server work on`, 4000);
});
