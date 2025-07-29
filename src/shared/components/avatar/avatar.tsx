import styleSheet from "./style.module.scss";
import { AvatharProps } from "./avatar-interface";

const Avatar = (props: AvatharProps) => {
  const { file, className = `${styleSheet.avatar}`, online } = props;

  return (
    <div className="position-relative">
      <img
        className={`${className} object-fit-cover rounded-circle `}
        src={file}
        alt=""
      />
      {online !== undefined && (
        <div
          className={` position-absolute bottom-0 end-0 rounded-circle w-25 h-25 ${
            online ? "bg-success" : "bg-secondary"
          }`}
        ></div>
      )}
    </div>
  );
};

export default Avatar;
