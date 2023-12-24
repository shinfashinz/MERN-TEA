import { Router } from "express";
import * as controller from "./controller.js"
import Auth from "./Auth.js";

const router=Router();

router.route("/addadmin").post(controller.addAdmin);
router.route("/adminlogin").post(controller.adminLogin);
router.route("/adminhome").get(Auth,controller.home);
router.route("/Forgotpswd").patch(controller.adminFrgtPwd);

// CATEGORY PAGE
router.route("/addcategory").post(controller.myCategory);
router.route("/getcategory").get(controller.getCategory);

router.route("/delcategory/:id").delete(controller.delCategory)
router.route("/addproduct").post(controller.AddProducts)




export default router;