import { Request, Response, NextFunction } from "express";
import AppError from "./appError";

type Controller = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

export const asyncWrapper = (controller: Controller) => {
  return (req: Request, res: Response, next: NextFunction) => {
    controller(req, res, next).catch((error) => next(error));
  };
};
