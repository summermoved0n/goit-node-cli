import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");
console.log(contactsPath);

export async function listContacts() {
  // ...твій код. Повертає масив контактів.
}

export async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

export async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

export async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}
