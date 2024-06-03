import FormUser from "./FormUser";
import Header from "./Header";

function Register() {
  return (
    <>
      <Header
      email={''}
      signText={'Inicia sesion'}
      />
      <FormUser
      title={`Registro`}
      email={`example@example.com`}
      password={`********`}
      buttonText={`Registrate`}
      linkSpan={``}
      linkSpanText={`¿Ya eres miembro? Inicia sesión aquí`}
      ></FormUser>
    </>
  );
}
export default Register;