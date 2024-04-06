import React from "react";
import cl from "./DescriptionAndPhoto.module.css";
import GreyText from "../../../components/UI/GreyText/GreyText";
import CreateInput from "../../../components/UI/CreateInput/CreateInput";
import FileInput from "../../../components/UI/FileInput/FileInput";
import TextArea from "../../../components/UI/TextArea/TextArea";
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
