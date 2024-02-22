import { program } from "commander";
import * as ContactServise from "./contacts.js";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await ContactServise.listContacts();
      return console.log(allContacts);

    case "get":
      const contactById = await ContactServise.getContactById(id);
      return console.log(contactById);

    case "remove":
      const deleteContact = await ContactServise.removeContact(id);
      return console.log(deleteContact);

    case "add":
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "1DEXoP8AuCGYc1YgoQ6hw" });
// invokeAction({ action: "remove", id: "1DEXoP8AuCGYc1YgoQ6hw" });
