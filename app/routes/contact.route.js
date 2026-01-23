import express from "express";
import contacts from "../controllers/contact.controller.js";

const router = express.Router();

/* ROUTE CỤ THỂ PHẢI ĐẶT TRƯỚC */
router.route("/favorites")
  .get(contacts.findAllFavorite);

router.route("/")
  .post(contacts.create)
  .delete(contacts.deleteAll);

/* ROUTE ĐỘNG ĐẶT SAU CÙNG */
router.route("/:id")
  .get(contacts.findOne)
  .put(contacts.update)
  .delete(contacts.remove);

export default router;
