import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class RootResolver {
  @Query(() => String) // Spécifier le type de retour de la requête
  async hello() {
    return 'Hello World'; // Retourner une valeur
  }
  
}   