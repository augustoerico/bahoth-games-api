module.exports.handler = async (event) => {
    const body = event.headers.Accept == 'text/html' ?
        '<h1>HELLO</h1>' :
        JSON.stringify({message: 'Created!', event: event});
    return {statusCode: 200, body: body};
};