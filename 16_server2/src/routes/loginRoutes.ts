import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const loginRoutes: Router = Router();

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.loggedIn) {
    next();
    return undefined;
  }
  res.status(403);
  res.send("Not permitted");
};

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

loginRoutes.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  console.log({ email, password });

  // if (email && password) {
  //   res.send(email! + password!);
  // } else {
  //   res.send("You must provide and email");
  // }

  console.log("req.session:", req.session);

  if (email && password && email === process.env.EMAIL && password === process.env.PASSWORD) {
    req.session = { loggedIn: true };
    res.redirect("/api");
  } else {
    res.send("Invalid email or password");
  }
});

loginRoutes.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/api/logout">Logout</a>
      </div>
    `);
  } else {
    res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/api/login">Login</a>
      </div>
    `);
  }
});

loginRoutes.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/api");
});

loginRoutes.get("/protected", requireAuth, (_req: Request, res: Response) => {
  res.send("Welcome to protected route, logged in user");
});

export default loginRoutes;
