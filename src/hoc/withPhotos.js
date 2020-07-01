import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

/* componente de orden superior, funcion que se le pasa un componente como parametro y devuelve otro componente ya sea con mejoras o con props inyectados */
export const withPhotos = graphql(gql`
query getPhotos ($categoryId: ID){
  photos (categoryId : $categoryId){
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`)
