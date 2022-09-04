import { validate, validateOrReject } from "class-validator";

export function BodyValidator(body) {
  validate(body).then((errors) => {
    // errors is an array of validation errors
    if (errors.length > 0) {
      throw new Error(`validation failed. errors: ${JSON.stringify(errors)} `);
    } else {
      console.log("validation succeed");

  });

  validateOrReject(body).catch((errors) => {
    console.log("Promise rejected (validation failed). Errors: ", errors);
  });
}
