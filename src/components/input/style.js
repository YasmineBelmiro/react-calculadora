import styled from "styled-components";

export const InputContainer = styled.div`
     width: 100%;
    height: 75px;
    background-color: #AAAAFF;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';
    

    input {
        width: 100%;
        height: 75px;
        background-color: #E5CFE5;
        border: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        font-size: 24px;
        font-family: 'Roboto';
        color: #FFFFFF;
    }

    input:focus {
    outline: none; 
    box-shadow: 0 0 5px 2px #E5CFE5; 
}
}
`
