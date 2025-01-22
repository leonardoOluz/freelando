import styled from "@emotion/styled";

const ListaHabilidadeTags = styled.ul`
    max-width: 90rem;
    padding: ${({theme}) => theme.espacamentos.l} ${({theme}) => theme.espacamentos.xl};
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${({theme}) => theme.espacamentos.m};
`;

export default ListaHabilidadeTags;