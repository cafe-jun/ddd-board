import { injectable } from "inversify";

@injectable()
export class FooService {
  constructor() {}

  getFoo(): string {
    return "fooService ";
  }
}
