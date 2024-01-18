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
router.route("/getCatDetails/:id").post(controller.getCatDetails);
router.route("/editCategory/:id").patch(controller.editCategory);

router.route("/getCatWiseProducts/:category").get(controller.getCategoryWisedProduct);
router.route("/delProduct/:id").delete(controller.delProduct);

router.route("/getAllProducts").get(controller.getAllProducts);




export default router;