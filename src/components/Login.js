import FormUser from "./FormUser";
import Header from "./Header";

function Login() {
  return (
    <>
      <Header
      email={'luisgtm23@gmail.com'}
      signText={'Registrate'}
      />
      <FormUser
      title={`Inicia sesion`}
      email={`example@example.com`}
      password={`********`}
      buttonText={`Inicia sesion`}
      linkSpan={``}
      linkSpanText={`¿Aún no eres miembro? Regístrate aquí`}
      >
      </FormUser>
    </>
  );
}
export default Login;