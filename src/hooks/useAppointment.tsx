import {gql, useQuery} from '@apollo/client';
const GET_APPOINTMENTS = gql`
  query Appoint {
    appoint {
      id
      date
      doctor {
        id
        firstName
        lastName
        image
      }
      reason
    }
  }
`;
export default function () {
  const {error, data, loading} = useQuery(GET_APPOINTMENTS);
  return {error, data, loading};
}
