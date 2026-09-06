exports.handler = async (event, context) => {
      const name = event.queryStringParameters.name || 'World'; // Получаем параметр из URL
        return {
            statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: `Hello, ${name}!` })
                      };
                      };