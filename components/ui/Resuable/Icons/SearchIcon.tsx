import { FunctionComponent } from "react";
import classes from "./SearchIcon.module.css";

interface SearchIconProps {
  className?: string;
}

const SearchIcon: FunctionComponent<SearchIconProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M18.9398 17.2693L24 22.3282L22.3282 24L17.2693 18.9398C15.3869 20.4488 13.0456 21.2696 10.6331 21.2661C4.76361 21.2661 0 16.5025 0 10.6331C0 4.76361 4.76361 0 10.6331 0C16.5025 0 21.2661 4.76361 21.2661 10.6331C21.2696 13.0456 20.4488 15.3869 18.9398 17.2693ZM16.5699 16.3926C18.0692 14.8507 18.9066 12.7838 18.9032 10.6331C18.9032 6.06321 15.2017 2.3629 10.6331 2.3629C6.06321 2.3629 2.3629 6.06321 2.3629 10.6331C2.3629 15.2017 6.06321 18.9032 10.6331 18.9032C12.7838 18.9066 14.8507 18.0692 16.3926 16.5699L16.5699 16.3926V16.3926Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default SearchIcon;
