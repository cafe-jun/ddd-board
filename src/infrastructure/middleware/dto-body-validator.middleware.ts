import { plainToInstance } from "class-transformer";
import { validateOrReject, ValidationError } from "class-validator";
import { NextFunction, Request, Response } from "express";

// skipMissingProperties 인자는 properties 가 없을경우 체크하지 않음
export const DtoBodyValidatorMiddleware = (
  type: any,
  skipMissingProperties = false
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const dto = plainToInstance(type, req.body);
    validateOrReject(dto, { skipMissingProperties })
      .then(() => {
        req.body = dto;
        next();
      })
      .catch((errors: ValidationError[]) => {
        const errorsMessageArray: string[] = [];
        errors.forEach((errors) => {
          errorsMessageArray.push(
            ...(Object as any).values(errors.constraints)
          );
        });
        return res.status(400).json({
          name: "ValidationErrorException",
          message: errorsMessageArray,
        });
      });
  };
};
