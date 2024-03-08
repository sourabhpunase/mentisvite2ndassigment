import express from "express";

import { verifyToken } from "../utils/verifiedUser.js";
import { updateUser ,deleteUser,test } from "../controller/user.controller.js";

 const router=express.Router();

router.get('/test',test)
router.post('/update/:id',verifyToken, updateUser)
router.delete('/delete/:id',verifyToken, deleteUser)
// router.get('/listings/:id',verifyToken,getUserListings)
// router.get('/:id', verifyToken, getUser)

export default router;