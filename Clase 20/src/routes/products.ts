import { IRouter, Router, Request, Response } from "express";

const router: IRouter = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({message: "work"})
})

export default router;