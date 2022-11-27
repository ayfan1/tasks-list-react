import "./style.css"

const Form = () => (
    <form className="form js-form">
        <input className="form__input js-newTask" placeholder="What you've to do? " />
        <button className="form__button">Add tasks</button>
    </form>
);

export default Form;