import React, { Component } from 'react';
import { fetchpost } from '../../utils/zgfetch';
import './login.scss';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',//用户名
            passWord: '',//密码
            userNameValid: true,
            passWordValid: true,
        }
    }

    textChange(key, event) {
        console.log(key);
        this.setState({ [key]: event.target.value });
        if ("" === event.target.value) {
            this.setState({ [key + 'Valid']: false })
        } else {
            this.setState({ [key + 'Valid']: true })
        }
    }


    //登录
    async doLogin(props) {
        console.log(this.state);
        let loginres = await fetchpost("/api/login", this.state);
        console.log(loginres, "返回数据");
        const { zhaungtai } = loginres;
        switch (zhaungtai) {
            case 1:
                console.log("登录成功");
                alert("登录成功,欢迎用户" + loginres.userName);
                this.props.history.push("/ ");
                break;
            case 2:
                console.log("登录失败")
                alert("登录失败，请检查密码是否正确!");
                break;
            case 3:
                console.log("登录失败")
                alert("登录失败，该账户不存在!");
                break;
        }
    }

    handleSubmit(event) {
        console.log(this.state.userName);
        event.preventDefault();
    }

    render() {

        return (
            <section className="login-bg-wrap">
                <div className="login-content">
                    <span className="logo"><img src="http://www.sj-hospital.org/static/images/logo.png" alt="" /></span>
                    <h2>Welcome</h2>
                    <h1>盛京互联网医院</h1>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label>
                            <span>用户名</span>
                            <input type="text" value={this.state.userName} onChange={this.textChange.bind(this, 'userName')} />
                            <i className={this.state.userNameValid === false ? "error" : 'required'}>用户名不能为空</i>
                        </label>
                        <label>
                            <span className="span-mima">密码</span>
                            <input type="password" value={this.state.passWord} onChange={this.textChange.bind(this, 'passWord')} />
                            <i className={this.state.passWordValid === false ? "error" : 'required'}>密码不能为空</i>
                        </label>
                        <button type="submit" className={(("" === this.state.userName) || ("" === this.state.passWord)) ? "disabled" : "login-btn"} onClick={this.doLogin.bind(this)}>登录</button>
                    </form>
                </div>
            </section>
        );
    }
}

export default Login;