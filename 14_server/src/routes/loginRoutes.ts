import { Router, Request, Response } from "express";

const loginRoutes: Router = Router();

loginRoutes.get("/login", (req: Request, res: Response) => {
  console.log("req.ip:", req.ip);
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
});

loginRoutes.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log({ email, password });

  res.send(email + password);
});

export default loginRoutes;
