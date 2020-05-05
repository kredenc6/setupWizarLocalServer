import express from "express";
// import * as gitP from "simple-git/promise";
import gitP, { SimpleGit, StatusResult } from "simple-git/promise";
 

const git = gitP("./testRepo");
// const status: StatusResult = await git.status();

const PORT = process.env.PORT || 5005;
const app = express();

app.listen(() => console.log(`Server listening on port: ${PORT}.`));

async function status () {
  let statusSummary = null;
  try {
     statusSummary = await git.status();
  }
  catch (e) {
    console.log(e);
     // handle the error
  }
  
  return statusSummary;
}
