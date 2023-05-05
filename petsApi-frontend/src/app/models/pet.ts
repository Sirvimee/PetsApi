import { PetType } from './pet-type';
import { PetFurColour } from './pet-fur-colour';
import { PetCountry } from './pet-country';

export interface Pet {
    id: string;
    name: string;
    code: number;
    type: PetType;
    furColour: PetFurColour;
    country: PetCountry;
}