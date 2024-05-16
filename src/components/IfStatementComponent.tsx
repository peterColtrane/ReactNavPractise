const Form = () => {
  <form>
    <input type="text" placeholder="skriv in din e-post" />
    <button type="submit">Skicka</button>
  </form>;
};

const ConfirmationText = () => <p>Tack! Vi hör av oss inom kort.</p>;

// const ContactForm = ({ isSent }: { isSent: boolean }) => {
//   if (isSent) {
//     return <ConfirmationText />;
//   } else {
//     return <form />;
//   }
// };
// isSent är ett nyckelord som kommer från props och känner av om ett formulär blivit submittat

// om du inte vill deconstruct'a parametern kan du använda props och skriva såhär
// const ContactFormIfStatement = (props: boolean) => {
//   if (props.isSent) return <ConfirmationText />;
//   else return <form />;
// };

// Eller så må du skrive som en av di Ternary Operator da!
// const ContactFormTernary = ({ isSent }: { isSent: boolean }) => {
//   isSent ? <ConfirmationText /> : <form />;
// };
