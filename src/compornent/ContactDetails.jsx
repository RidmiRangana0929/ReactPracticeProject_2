export const ContactDetails=()=>{
    function contactDetails (contact){
        return contact.phoneNumber+"  "+contact.email+" "+contact.address;
      }
      const contact={
        phoneNumber:"0703274953",
        email:"ridmirangana1429@gmail.com",
        address:"Kalutara"
      }
      return (
        <div className="App">
          <h1>{contactDetails(contact)}</h1>
        </div>
      );
    }
    export default ContactDetails;