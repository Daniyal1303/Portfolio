import { Col, Row } from "react-bootstrap";
import linuxOs from "../../Assets/TechIcons/Linux.svg";
import cursorAI from "../../Assets/TechIcons/Cursor.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import claude from "../../Assets/TechIcons/Claude.svg";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<img src={linuxOs} alt="linuxOs" className="tech-icon-images" />
				<div className="tech-icons-text">Linux Os</div>
			</Col>

			<Col xs={4} md={2} className="tech-icons ">
				<img src={vsCode} alt="vsCode" className="tech-icon-images" />
				<div className="tech-icons-text">Vs Code</div>
			</Col>

			<Col xs={4} md={2} className="tech-icons ">
				<img src={cursorAI} alt="cursorAI" className="tech-icon-images" />
				<div className="tech-icons-text">Cursor AI</div>
			</Col>

			<Col xs={4} md={2} className="tech-icons ">
				<img src={claude} alt="claude" className="tech-icon-images" />
				<div className="tech-icons-text">Claude Code</div>
			</Col>
		</Row>
	);
}

export default Toolstack;
