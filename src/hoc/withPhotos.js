import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

/* componente de orden superior, funcion que se le pasa un componente como parametro y devuelve otro componente ya sea con mejoras o con props inyectados */

const GET_PHOTOS = gql`
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
`

export const withPhotos = graphql(GET_PHOTOS)
