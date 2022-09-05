// import { plainToInstance } from "class-transformer";
// import { validateOrReject, ValidationError } from "class-validator";
// import { NextFunction, Request, Response } from "express";
// import { request } from "http";

// // skipMissingProperties 인자는 properties 가 없을경우 체크하지 않음
// export const ParamPaserIntMiddleware = (target: string) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     const targetParam = req.params[target];
//     const paramInt = Number(targetParam);
//     console.log(typeof paramInt);
//     console.log(Number.isInteger(paramInt));
//     if (Number.isInteger(paramInt)) {
//       req.params.target = Number(targetParam);
//       next();
//     }
//     return res.status(400).json({
//       name: "ValidationErrorException",
//       message: "url params must be a number",
//     });
//   };
// };
