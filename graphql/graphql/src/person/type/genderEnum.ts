import { registerEnumType } from "@nestjs/graphql";

export enum genderEnum{
    MALE,
    FEMALE,
    OTHER,
}

registerEnumType(genderEnum, {
    name: 'genderEnum',
  });
  