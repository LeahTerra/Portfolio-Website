import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./intuit.png"
								alt="Intuit"
								className="work-image"
							/>
							<div className="work-title">Intuit, QuickBooks Online Navigation Team</div>
							<div className="work-subtitle">
								Software Development Intern
							</div>
							<div className="work-duration">Jan. 2022 - Dec. 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
