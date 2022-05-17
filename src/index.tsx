import React, { FC, HTMLAttributes, ReactNode } from "react";

export interface Props extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
}

export const Thing: FC<Props> = ({ children }) => {
	return <div>{children || `Sample text`}</div>;
};
