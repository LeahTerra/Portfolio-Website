import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/school.css";

const schools = () => {
	return (
		<div className="schools">
			<Card
				icon={faSchool}
				title="School"
				body={
					<div className="schools-body">
						<div className="school">
							<img
								src="./uofa.png"
								alt="University of Alberta"
								className="school-image"
							/>
							<div className="school-title">University of Alberta</div>
							<div className="school-subtitle">
								Major: Computer Science
							</div>
							<div className="school-duration">Sept. 2017 - Dec. 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default schools;
