import request from 'request-promise';

interface CheckIntrospectionQueryConfig {
  url: string;
  token: string;
}

const emptyIntrospectionQuery = `
{
  __schema{
    queryType{
      name
    }
  }
}
`

const checkIntrospectionQuery = async ({ url, token }: CheckIntrospectionQueryConfig): Promise<boolean> => {
  const headers = {
    Authorization: token,
  }

  let result;
  try {
    result = await request.post(url, {
      headers,
      json: true,
      body: {
        query: emptyIntrospectionQuery
      }
    })
  } catch (err) {
    result = false;
  }

  return result
}

export default checkIntrospectionQuery;
