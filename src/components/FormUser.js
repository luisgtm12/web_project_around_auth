import React from "react";
//import {Link} from 'react-router-dom'
function FormUser (
  {title,email,password,buttonText,linkSpan,linkSpanText}
){
  return(
    <form className="user-form">
      <h3 className="user-form__title">{title}</h3>
      <div className="user-form__container">
        <input
        className="user-form__input"
        type="email"
        placeholder="Correo electronico"
        required
        value={email}
        />
        <input
        className="user-form__input"
        type="password"
        placeholder="Contraseña"
        required
        value={password}
        />
      </div>
      <button className="user-form__button-submit" type="submit">{buttonText}</button>
      <a to={linkSpan} className="user-form__link-span">
        {linkSpanText}
      </a>
    </form>
  )
}
export default FormUser;