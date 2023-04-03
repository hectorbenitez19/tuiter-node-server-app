import express from 'express';
const app = express();
import cors from 'cors';
app.use(cors());
import HelloController
  from "./controllers/hello-controller.js";
import UserController
  from "./controllers/users/users-controller.js";

  import TuitsController
    from "./controllers/tuits/tuits-controller.js";

app.use(express.json());
TuitsController(app);
app.listen(process.env.PORT || 4000);