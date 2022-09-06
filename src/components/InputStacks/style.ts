import styled from "styled-components";

export const Tags = styled.ul`
	width: 100%;
	max-height: 3rem;
	min-height: 3rem;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	list-style: none;
	font-size: 1.2rem;
	overflow: hidden;

	& > div {
		width: fit-content;
		display: flex;
		align-items: center;
		gap: 5px;

		li {
			width: fit-content;
			padding: 5px 10px;
			border-radius: 4px;
			border: 1px solid var(--primary-3-color);
		}

		span {
			cursor: pointer;
		}
	}
`;