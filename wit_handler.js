function responseFromWit(data) {
  console.log("data from wit:");
  console.log(JSON.stringify(data));

  const intent = (data.intents.length > 0 && data.intents[0]) || "__foo__";

  switch (intent.name) {
    case "intent-name-1":
      return intent1();

    case "intent-name-2":
      return intent2();

    case "am-i-a-bot":
      return Promise.resolve(
        "Yes sir. Rest assured there's no man behind the curtain."
      )
  }

  // case- out of scope
  return handleGibberish();
}

// ----------------------------------------------------------------------------
// handleGibberish

function handleGibberish() {
  return Promise.resolve(
    "Default reply"
  );
}
// ----------------------------------------------------------------------------
// case: intent-name-1

function intent1() {
  return "intent1";
}

// ----------------------------------------------------------------------------
// case: intent-name-2

function intent2() {
  return "intent2";
}

exports.responseFromWit = responseFromWit;
