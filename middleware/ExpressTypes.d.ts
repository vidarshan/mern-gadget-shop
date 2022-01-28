import { Request, Response, NextFunction } from "express";

export type ExpressTypes = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;
