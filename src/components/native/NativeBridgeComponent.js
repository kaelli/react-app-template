import React,{Component} from 'react'

window.appTowebBroswer = function () {
    alert("Android调用了JS的appTowebBroswer方法");
}
window.callJS = ()=>{
    alert("Android调用了JS的callJS方法");
}
export default class NativeBridgeComponent extends Component{

    constructor(props){
        super(props)

        this.getData = this.getData.bind(this);
        this.callApp = this.callApp.bind(this);

        this.getKmobileData = this.getKmobileData.bind(this);

    }



    callApp(){
        let param = {'actionType':'setTitle','params':{'title':'测试标题'}}
        window.webBrowserToApp(JSON.stringify(param));
        // window.webBrowserToApp(JSON.stringify(param));
    }

    getData(){
        let data =window.native.getAppData('cs');
        // let data =window.getAppData('cs');
        alert(data)
    }


    getKmobileData(){
        let data = window.kmobile.getOrgInfo();
        alert(data);
    }


    render(){
        return(
            <div className="root">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <div className="webBrowserToApp">
                    <button onClick={this.callApp}>webBrowserToApp</button>
                </div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <div className="getAppData">
                    <button onClick={this.getData}>getAppData</button>
                </div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <div className="getOrgInfo">
                    <button onClick={this.getKmobileData}>getOrgInfo</button>
                </div>

            </div>)
    }
}
