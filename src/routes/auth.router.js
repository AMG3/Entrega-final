import { Router } from "express";
import passport from "passport";

import * as userController from "../controllers/user.controller.js";
import { notLoggedIn } from "../middlewares/auth.middleware.js";

const router = Router();
router.get("/", notLoggedIn, userController.renderSignIn);
router.post(
  "/signin",
  passport.authenticate("local.signin", {
    failureRedirect: "/",
    failureFlash: true,
  }),
  userController.handleSignIn
);

export default router;
