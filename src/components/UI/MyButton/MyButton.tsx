import classes from  "./MyButton.module.css"

const MyButton = (props: any) => {
    return (
        <button className={classes.MyButton} {...props}>{props.children}</button>
    );
};

export default MyButton;