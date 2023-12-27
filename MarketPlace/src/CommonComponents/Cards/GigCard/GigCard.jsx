import React from "react";
import gig from "../../../assets/Images/gig.png";
import userAvater from "../../../assets/Images/06.jpg";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

export default function GigCard({}) {
	return (
		<div className="gig-card">
			<div className="gig-banner">
				<img src={gig} alt="gig-banner" />
				<span className="favourit">
					<FaHeart />
				</span>
			</div>
			<div className="gig-body">
				<div className="user">
					<img src={userAvater} alt="profile-img" />
					<h4>User Name</h4>
				</div>
				<span>
					<h4>
						{"i will do Web development with Reactjs nextjs and nodejs for you"}
					</h4>
				</span>
				<div className="rating">
					<span>
						<FaStar />
						{"5.0"}
						<span>(76)</span>
					</span>
				</div>
				<div className="Price">
					<h5>From ${"10"}</h5>
				</div>
			</div>
		</div>
	);
}
