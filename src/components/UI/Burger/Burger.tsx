import classes from "./Burger.module.css"

const Burger = (props: any) => {
    return (
        <div {...props} className= {classes.Burger}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default Burger;