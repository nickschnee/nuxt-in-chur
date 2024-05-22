export default defineEventHandler( async (event) => {

  //   read get parameters from url
  //   const { name } = getQuery(event);

  // read post parameters from body
  const { name } = await readBody(event);
  console.log(name);

  console.log("Ich heisse", name);

  const personal = {
    nick: 192,
    wolfgang: 196,
    samuel: 192,
  };

  return {
    statusCode: 200,
    body: JSON.stringify(personal[name]),
  };
});
