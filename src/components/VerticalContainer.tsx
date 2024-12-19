import { VerticalContainerCSS } from "../styles";

interface VerticalContainerProperties {
	children: JSX.Element | Array<JSX.Element>;
}

export const VerticalContainer: React.FC<VerticalContainerProperties> = (
	props,
) => {
	return (
		<div style={VerticalContainerCSS.vertical__container}>{props.children}</div>
	);
};
