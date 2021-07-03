import styled from "styled-components/native";

export const Title = styled.Text`
    color: #000000;
    text-align: center;
    margin-top: 18px;
    font-size: 24px;
`;

export const AppText = styled.Text`
    color: #575757;
    font-size: 15px;
`

export const InputTasks = styled.TextInput`
    align-self: center;
    margin-top: 14px;
    background-color: #DAE5F2;
    width: 300px;
    height: 45px;
    border-radius: 15px;
    padding: 10px;
`;

export const ButtonAddTask = styled.TouchableOpacity`
    align-self: center;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    background-color: #BDC7E4;
    width: 276px;
    height: 30px;
    border-radius: 15px;
`

export const List = styled.View`
    align-self: center;
    margin-top: 34px;
`

export const ButtonDeleteTask = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #ED6B6B;
    width: 25px;
    height: 25px;
    border-radius: 50px;
`

export const Task = styled.View`
    align-items: flex-start;
    justify-content: center;
    background-color: #C9E6CF;
    width: 250px;
    height: 25px;
    border-radius: 15px;
    padding: 10px;
    margin-left: 14px;
    margin-bottom: 22px;
`

export const TaskGroup = styled.View`
    justify-content: center;
    flex-direction: row;
`