// export function withParams<PayloadType>(type: Constructor<PayloadType>) {
//   return withPayloadType(type, PayloadSource.params);
// }

// export function withBody<PayloadType>(type: Constructor<PayloadType>) {
//   return withPayloadType(type, PayloadSource.body);
// }

// export function withQuery<PayloadType>(type: Constructor<PayloadType>) {
//   return withPayloadType(type, PayloadSource.query);
// }

// function withPayloadType<PayloadType>(
//   type: Constructor<PayloadType>,
//   source: PayloadSource
// ) {
//   return function (target: any, key: string, value: any) {
//     let metadataList: interfaces.ControllerMethodMetadata[] =
//       Reflect.getMetadata(
//         // https://github.com/inversify/inversify-express-utils/blob/master/src/constants.ts
//         "inversify-express-utils:controller-method",
//         target.constructor
//       );
//     let methodMetadata = metadataList.find((metadata) => metadata.key === key);
//     if (methodMetadata === undefined) {
//       throw (
//         `Could not find method definition for ${key} on ${target.constructor.name} ` +
//         `when defining ${source} type. Check the order of decorators.`
//       );
//     } else {
//       let validateMiddleware = validate(type, source);
//       methodMetadata.middleware.unshift(validateMiddleware);
//     }
//   };
// }
