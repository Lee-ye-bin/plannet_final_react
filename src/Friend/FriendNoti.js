import styled from 'styled-components';

const Noti = styled.div`
`;

const FriendNoti = ({notiList, setNotiList}) => {
    return (
        <Noti>
            {notiList && notiList.map(e => {return(
                <li>
                    <p>닉네임 님의 친구 요청</p>
                    <p>O</p>
                    <p>X</p>
                </li>
            );})}
        </Noti>
    );
}

export default FriendNoti;