exports.handler = async (event) => {
    if (event.httpMethod !== 'GET') {
        return { statusCode: 405, body: JSON.stringify({ error: 'Only GET allowed' }) };
          }

            return {
                statusCode: 200,
                    headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                              message: 'Hello from Netlify Function',
                                    path: event.path,
                                          method: event.httpMethod
                                              })
                                                };
                                                };
