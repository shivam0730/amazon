const status = "open";

if (status === "open" && status === "closed") {
  console.log("contradictory");
}

if (true || status === "closed") {
  console.log("always true");
}

const data = JSON.parse(input);

const name =
  user.profile.account.details.name.toUpperCase();
