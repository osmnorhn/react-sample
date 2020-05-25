import { Contact } from "../types/contact";

export class ContactService {
  constructor(private request: IRequestService) {}
  public async getContacts() {
    let data = await new Promise<ContactResponse>((resolve, reject) => {
      fetch(`http://localhost:3000/contact`)
        .then((response) => resolve(response.json()))
        .catch((reason) => {
          reject(reason);
          // log the error here
          console.log(reason);
        });
    });

    return data as ContactResponse;
  }
}

/////////////////////////////////
// API RESPONSE DATA PROTOTYPE //
/////////////////////////////////

interface ContactResponse {}
