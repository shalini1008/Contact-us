import styles from "./ContactForm.module.css"
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
const ContactForm = () => {
    const [name, setName] = useState("Shalini");
    const [email,setEmail] = useState("support@learningreact.com");
    const [text,setText] = useState("LET'S LEARN");
    const onSubmit = (e) => {
        e.preventDefault();
        setName(e.target[0].value);
        setEmail(e.target[1].value);
        setText(e.target[2].value);

    }
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button
                 text="VIA SUPPORT CHAT"
                 icon={<MdMessage fontSize="24px"/>}
                />
                <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
            </div>
            <Button
            text="VIA EMAIL FORM"
            icon={<HiMail fontSize="24px" />}
            lightmode={true}
            />
           <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>
        </div>
        <div className={styles.contact_image}>
             <img src="/images/contact.svg"/>
        </div>
    </section>
  )
}

export default ContactForm