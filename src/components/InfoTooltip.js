import closeIcon from "../images/close-icon.png"
import correct from "../images/Corretc.png"
function InfoTooltip ({name,title,isOpen,onClose}){
  return(
    <div id={`modal-${name}`} className={`modal modal_type_${name} ${isOpen ? "modal__opened" : ""}`}>
          <div className="modal__contain">
            <img
              src={closeIcon}
              id={`close-icon-${name}`}
              alt="icono de cierre"
              className="modal__close-icon"
              onClick={onClose}
            />
            <div className="modal__content">
              <img src={correct}
                className="modal__content_img"
                />
              <h4 className="modal__content-title">{title}</h4>
            </div>
            
          </div>
        </div>
  )
}
export default InfoTooltip;