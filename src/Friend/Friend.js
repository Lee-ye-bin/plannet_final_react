import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from '../Utill/Nav';
import Api from "../api/plannetApi";

const Wrap = styled.div`
    width: 1130px;
    height: 100vh;
    background-color: white;
    margin: 0 auto;
`;
const Section = styled.div`
    width: 850px;
    height: calc(100vh - 40px);
    float: left;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 20px;
        padding: 15px;
    }
    &::-webkit-scrollbar-thumb {
        height: 30%; /* 스크롤바의 길이 */
        background: #ddd; /* 스크롤바의 색상 */
        border-radius: 10px;
        border: 7px solid transparent;
        background-clip: padding-box;
    }
    &::-webkit-scrollbar-track {
        background: none;
        /*스크롤바 뒷 배경 색상*/
    }
    .friend, .noti {
        height: 550px;
        height: 100%;
        float: left;  
        padding: 10px 30px 10px 0;
        h2{
          margin-top: 35px;
        }
    }
    .friend {
        width: 70%;
        padding-left: 30px;
          &>div:last-child{
            width: 100%;
            height: px;
            border-radius: 5px;
            background-color: #f9f9f9;
            overflow: hidden;
            transition: all .5s ease-in;
            margin-top: 10px;
            text-align: center;
            p{
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
        }
        div:first-of-type{
            overflow: hidden;
            transition: all .5s ease-in;
            p{
                height: 40px;
                resize: none;
                outline: none;
                padding: 10px;
                background-color: #f9f9f9;
                border-radius: 5px;
                border: 2px solid #f9f9f9;
                transition: all .1s ease-in;
                input {
                    width: 345px;
                    border: none;
                    outline: none;
                    background-color: #f9f9f9;
                }
                span{
                    font-size: 13px;
                    line-height: 16px;
                    color: #888;
                    font-weight: 400;
                }
                &:focus-within{
                    border: 2px solid #f0f0f0;
                }
            }
            button{
                cursor: pointer;
                padding: 5px 3px;
                margin: 5px 0;
                width: 100%;
                border: none;
                background-color: #333;
                border-radius: 5px;
                color: white;
                transition: all .1s ease-in;
                &:disabled, &:hover{
                    background-color: #666;
                    color: #aaa;
                }
            }
        }
        
    }
    .noti {
        width: 30%;
        div {
            width: 100%;
            height: calc(100% - 70px);
            padding: 10px;
            background-color: #f9f9f9;
            border-radius: 5px;
            border: 2px solid #f9f9f9;
            overflow: hidden;
            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
    h2 {
        font-size: 28px;
        font-weight: 900;
        margin-bottom: 10px;
        position: relative;
        i{
            position: absolute;
            right: 0;
            font-size: 25px;
            line-height: 34px;
            &:hover {
                color: #888;
            }
        }
        .addActive{
            color: #888;
        }
    }
`;

const Friend = () => {
    const getId = window.localStorage.getItem("userId");
    const [friendList, setFriendList] = useState();
    const [addInput, setAddInput] = useState();
    const [inputMessage, setInputMessage] = useState(''); 
    const [isOk, setIsOk] = useState(true); 
    const [isAdd, setIsAdd] = useState(false); 
    useEffect(() => {
        const personalHome = async() => {
            try{
                const response = await Api.personalHome(getId);
            } catch(e){
            console.log(e);
            }
        }
        personalHome();
    },[getId]);

    const onChangeAddInput = (e) => {
        const regex = /^([^#@:]\s?){2,32}#[0-9]{4}$/
        const current = e.target.value;
        setAddInput(current);
        if (!regex.test(current)) {
            setInputMessage('친구의 닉네임#유저코드 형식')
            setIsOk(true)
        } else {
            setInputMessage('')
            setIsOk(false);
        }
    }
    const onClickaddFriend = (e) => {
        if(isAdd) setIsAdd(false);
        else setIsAdd(true);
    }

    return (
        <Wrap>
            <Nav/>
            <Section>
                <div className="friend">
                    <h2>Friend<i className={'bi bi-person-fill-add ' + (isAdd? 'addActive' : '')} onClick={onClickaddFriend}></i></h2>
                    <div style={isAdd? {height: '80px'} : {height: '0px'}}>
                        <label>
                            <p>
                            
                                <input type="text" maxLength={25} placeholder='Nickname#0000'value={addInput} onChange={onChangeAddInput}/>
                                <span>{inputMessage}</span>
                            </p>
                        </label>
                        <button disabled={isOk}>친구요청</button>
                    </div>
                    <div style={isAdd? {height: 'calc(100% - 160px)'} : {height: 'calc(100% - 80px)'}}>
                        {friendList? friendList.map(e =>{return(
                            <>
                            </>
                        );})
                        :
                        <p><b>등록된 친구가 아직 없습니다.</b><br/>상단 오른쪽의 버튼을 눌러 친구를 추가해보세요!</p>}
                    </div>
                </div>
                <div className='noti'>
                    <h2>Notification</h2>
                    <div/>
                </div>
            </Section>
            <div className="copy">&#169; Plannet.</div>
        </Wrap>
    );
}

export default Friend;


