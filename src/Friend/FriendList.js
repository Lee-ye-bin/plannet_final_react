import styled from 'styled-components';

const Friends = styled.div`
    width: 100%;
    height: calc(100% - 80px);
    border-radius: 5px;
    background-color: #f9f9f9;
    overflow: hidden;
    transition: all .5s ease-in;
    margin-top: 10px;
    text-align: center;
    p.nothing{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        color: #d9d9d9;
        b{
            color: #d9d9d9;
            font-size: 17px;
        }
    }
    &::-webkit-scrollbar {
        display: none;
    }
    ul>p{
        margin-top: 10px;
        color: #bbb;
        font-size: 12px;
    }
    li{
        height: 70px;
        background-color: #f9f9f9;
        border-radius: 5px;
        padding: 10px 25px;
        position: relative;
        margin-bottom: 5px;
        transition: all .3s ease-in;
        &:hover {
            background-color: #f4f4f4;
            i {
                color: #888;
            }
            >div{
                border: 3px solid #a5c6ff;
            }
        }
        >div{
            transition: all .3s ease-in;
            width: 50px;
            height: 50px;
            position: absolute;
            overflow: hidden;
            border-radius: 50px;
            border: 3px solid #ebebeb;
            >img{
                width: 46px;
            }
        }
        p{
            text-align: left;
            position: absolute;
            left: 90px;
            top: 16px;
            width: 350px;
            span:first-child{
                font-size: 16px;
                font-weight: 700;
                margin-right: 5px;
            }
            span:last-child{
                color: #bbb;
            }
        }
        p:last-of-type{
            top: 38px;
            color: #888;
        }
    }        
    .unfriend_btn{
        transition: all .3s ease-in;
        cursor: pointer;
        position: absolute;
        font-size: 30px;
        color: #f9f9f9;
        right: 30px;
        top: 50%;
        transform:translateY(-50%);
    }
`;

const FriendList = ({setCommnet,setModalHeader,setModalOpen,friendList,isAdd}) => {


    // ???????????? ?????? ??????(???????????????)
    const onClickUnfriend = () => {
        setCommnet("????????? ????????????????????????? (?????? ??? ?????? ???????????????)");
        setModalHeader("????????????");
        setModalOpen(true);
    }

    return (
        <Friends className={(friendList? 'is_list' : '') + ' ' + (isAdd? 'add_active_box' : '')}>
            {friendList? 
            <ul>
                {friendList.map(e =>{return(
                    <li>
                        <div><img src={e.proImg} alt="profileImg" /></div>
                        {/* <div><img src={"https://khprojectplannet.s3.ap-northeast-2.amazonaws.com/"+e.proImg} alt="profileImg" /></div> */}
                        <p>
                            <span>{e.nickname}</span>
                            <span>{e.userCode}</span>
                        </p>
                        <p>{e.profile}</p>
                        <i className="bi bi-x-lg unfriend_btn" onClick={onClickUnfriend}></i>
                    </li>
                );})}
                <p>??? ?????? ????????? ??????????????????!</p>
            </ul>
            :
            <p className='nothing'><b>????????? ????????? ?????? ????????????.</b><br/>?????? ???????????? ????????? ?????? ????????? ??????????????????!</p>}
        </Friends>
    );
}

export default FriendList;