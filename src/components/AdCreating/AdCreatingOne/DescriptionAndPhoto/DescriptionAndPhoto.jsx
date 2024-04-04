import React from "react";
import cl from "./DescriptionAndPhoto.module.css";
import GreyText from "../../../UI/GreyText/GreyText";
import CreateInput from "../../../UI/CreateInput/CreateInput";
import FileInput from "../../../UI/FileInput/FileInput";
import TextArea from "../../../UI/TextArea/TextArea";
const DescriptionAndPhoto = ({
  className,
  taskInformation,
  setTaskInformation,
}) => {
  return (
    <div
      className={
        className
          ? [cl.DescriptionAndPhoto, className].join(" ")
          : cl.DescriptionAndPhoto
      }
    >
      <GreyText>Описание</GreyText>
      <div className={cl.InputContainer}>
        <p className={cl.inputCounter}>0 / 500</p>
        <TextArea
          value={taskInformation.taskDescription}
          className={cl.DescriptionInput}
          placeholder="Дайте подробное тз..."
          setValue = {   (e) =>   { setTaskInformation( {taskDescription : e} ) } } 
        ></TextArea>
      </div>
      <FileInput />
    </div>
  );
};

export default DescriptionAndPhoto;
