const axios = require("axios");

async function main() {
  try {
    const data = await axios.get(
      "http://127.0.0.1:5000/convert?link=https://www.youtube.com/watch?v=BFnvHGdYJmM"
    );
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

main();
