import {Context, Resolver} from "../../types/gql-utils";

export default async (resolver : Resolver, parent : any, args : any, context : Context, info : any) => {
  return resolver(parent, args, context, info);
};
