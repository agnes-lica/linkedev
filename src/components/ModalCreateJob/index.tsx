import FormAddJob from "../FormAddJob";
import { useContext, useState } from "react";
import { RecruiterContext } from "../../providers/Recruiter/UserContext";
import { HeaderModal, Container } from "./style";

export default function ModalCreateJon() {
	const [showModal, setShowModal] = useState(false);
	const { setTags } = useContext(RecruiterContext);
	const handleModal = () => {
		setShowModal(!showModal);
		setTags([]);
	};

	return showModal ? (
		<Container>
			<div className="modalFrame">
				<div className="modal-body">
					<HeaderModal>
						<h3>Cadastrando Nova Vaga</h3>
						<button className="closeButton" onClick={handleModal}>
							X
						</button>
					</HeaderModal>
					<main>
						<FormAddJob />
					</main>
				</div>
			</div>
		</Container>
	) : (
		<>
			{null}
			<button onClick={handleModal}>Cadastrar Vaga</button>
		</>
	);
}
