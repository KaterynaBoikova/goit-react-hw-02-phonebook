import React, {Component} from 'react';
import PropTypes from "prop-types";
import styles from './ContactForm.module.css';


class ContactForm extends Component{
    state = {
        name: '',
        number: '',
    };

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.submitted(this.state);
        this.setState({ name: '', number: ''});
    };

    render(){
        return(
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <label>Name
                    <input
                        className={styles.inputForm}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                    /></label>
                <label>Phone
                    <input
                        className={styles.inputForm}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        value={this.state.number}
                        onChange={this.handleChange}
                    /></label>
                <button
                    className={styles.btnAdd}
                    type="submit" >Add Contact</button>
            </form>
        )

}};

ContactForm.propTypes = {
    submitted: PropTypes.func,
};

export default ContactForm;