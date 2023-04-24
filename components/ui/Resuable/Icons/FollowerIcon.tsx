import { FunctionComponent } from "react";
import classes from "./FollowerIcon.module.css";

interface FollowerIconProps {}

const FollowerIcon: FunctionComponent<FollowerIconProps> = () => {
	return (
		<svg
			viewBox="0 0 1024 1024"
			version="1.1"
            fill={"#492AA1"}
		>
			<path d="M862.3616 605.44c-44.1344 0.4608-74.752 21.7088-94.2592 45.7216-19.1488-24.32-49.8176-45.7216-95.0784-45.7216-29.9008 0-54.7328 9.6768-73.7792 28.8256-34.8672 35.0208-35.584 87.7568-35.2256 89.3952-0.8704 5.3248-18.8928 131.9936 192.768 237.4656 3.584 1.792 7.5264 2.7136 11.4176 2.7136 4.1472 0 8.2432-1.024 11.9808-3.0208 128-67.9424 194.56-150.2208 192.512-239.8208C972.7488 674.56 943.7184 605.44 862.3616 605.44zM767.8464 909.312c-162.816-85.4528-153.7024-174.08-152.9344-181.6064-0.0512-9.4208 3.6352-40.192 20.6848-57.2928 9.216-9.2672 21.4528-13.7728 37.4784-13.7728 54.2208 0 68.1472 49.5104 69.4784 54.9888 2.6624 11.3664 12.6976 19.4048 24.3712 19.6608 11.2128-1.2288 22.0672-7.4752 25.2416-18.688 0.6656-2.2528 16.3328-55.3984 71.6288-55.9616 57.1392 0 57.7536 61.7472 57.8048 67.3792C923.0336 787.7632 868.5568 853.248 767.8464 909.312zM768.0512 321.4848c0-155.2384-126.3104-281.6-281.6-281.6s-281.6 126.3104-281.6 281.6c0 109.6192 63.0784 204.5952 154.7264 251.0848-168.8576 54.1184-308.3264 207.4624-308.3264 363.3152 0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6c0-164.864 193.792-332.8 384-332.8C641.6896 603.0848 768.0512 476.7744 768.0512 321.4848zM486.4512 551.8848c-127.0272 0-230.4-103.3728-230.4-230.4 0-127.0272 103.3728-230.4 230.4-230.4s230.4 103.3728 230.4 230.4C716.8512 448.512 613.4784 551.8848 486.4512 551.8848z" />
		</svg>
	);
};

export default FollowerIcon;
