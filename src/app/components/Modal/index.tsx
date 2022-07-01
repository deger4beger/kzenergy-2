import s from "./index.module.scss"

interface Props {
  active: boolean
  setActive: (active: boolean) => void
  children: React.ReactNode
}

const Modal: React.FC<Props> = ({
  active,
  setActive,
  children
}) => {
  return (
    <div className={active ? s.modal + " " + s.active : s.modal} onClick={() => setActive(false)}>
      <div
        className={active ? s.modal__content + " " + s.active : s.modal__content}
        onClick={e => e.stopPropagation()}
      >
        <span className={s.close} onClick={() => setActive(false)} />
        {children}
      </div>
    </div>
  );
}

export default Modal