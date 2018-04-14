import React, { Component } from 'react';

class LoginComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            userName:'',
            userPassword:''
        }
        this.gotoNext = this.gotoNext.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    gotoNext(){
        if ('admin'==this.state.userName&&'123456'==this.state.userPassword){
            alert('登陆成功');
        }else {
            alert('登陆失败\n用户名：'+this.state.userName+'\n'+'用户密码：'+this.state.userPassword);
        }

    }
    updateState(key , value ) {
        this.setState(()=>{
            return {[key]:value}
        });
    }

    render(){
        return(
            <div className="Login">
                <div className="Login-Name">
                     <p>用户名</p>
                    <input onChange={(event)=>{this.updateState('userName',event.target.value)}}
                           placeholder="品牌账号" ></input>
                </div>
                <div className="Login-Password">
                    <p>用户密码</p>
                    <input type="password" onChange={(event)=>{this.updateState('userPassword',event.target.value)}}
                           placeholder="六位数字密码" ></input>
                </div>
                <div>
                    <p></p>
                    <button onClick={this.gotoNext}>登陆</button>
                </div>
            </div>
        );
    }
}
export default LoginComponent;