//FIRST IMPORT DECLARE MODULE, AND THEN ATTACH OTHERS: svc / dir / cmp / ctrl TO IT AND THEN EXPORT name 
import { app } from "./_app.module";  //FIRST IMPORT MODULE DECLARATION
export default app.name;              //AND FINALLY EXPORT  module.name  
// name IS USED TO bootstrap (START THE APP) OR TO IMPORT THIS MODULE AS A DEPENDENCY FOR OTHER modules